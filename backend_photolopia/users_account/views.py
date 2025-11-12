from django.shortcuts import render
from rest_framework.generics import  CreateAPIView,UpdateAPIView,RetrieveUpdateAPIView,ListAPIView
from rest_framework.views import APIView  
from rest_framework import filters
from .models import CustemUser ,PhotographerProfile
from .serializers import RegisterUserSerializer,ListPhotographerSerializer,LoginUserSerializer,CustemUserSerializer,PhotographerProfileSerializer,SearchPhotographerSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.exceptions import InvalidToken
# Create your views here.
class UserDataView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        serializer = CustemUserSerializer(request.user)
        return Response(serializer.data)

class RegisterUserView(CreateAPIView):
    serializer_class = RegisterUserSerializer
    permission_classes = [AllowAny]

class LoginView(APIView):
    def post(self,request):
        serializer =  LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = Response({
                "user":CustemUserSerializer(user).data
            }
            ,status=status.HTTP_200_OK)
            response.set_cookie(key="access_token",value=access_token,httponly=True,secure=False,samesite="Lax")
            response.set_cookie(key="refresh_token",value=str(refresh),httponly=True,secure=False,samesite="Lax")
            print(str(refresh))
            return response
        print(serializer.errors)
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST) 


class LogoutView(APIView):
    def post(self,request):
        try:
            refresh_token = request.COOKIES.get("refresh_token")
            refresh = RefreshToken(refresh_token)
            refresh.blacklist()
        except Exception as e:
            return Response({"error":"Error invalidating token"+str(e)} ,status=status.HTTP_400_BAD_REQUEST)
        response = Response({"message":"Successfuly logged out"},status=status.HTTP_200_OK)
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")

        return response

class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request):
        refresh_token = request.COOKIES.get("refresh_token")
        
        if not refresh_token:
            return Response({"error": "Refresh token not provided"}, status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            refresh = RefreshToken(refresh_token)
            access_token = str(refresh.access_token)

            response = Response({
                "access_token": access_token,
                "message": "Access token refreshed successfully"
            }, status=status.HTTP_200_OK)

            # Update access_token cookie
            response.set_cookie(
                key="access_token",
                value=access_token,
                httponly=True,
                secure=False,   # Set to True in production
                samesite="None"
            )
            
            return response
        
        except InvalidToken:
            return Response({"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED)


class UpdateProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self,request):
        user = request.user       
        profile =user.photographer_profile
        serializer = PhotographerProfileSerializer(profile,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"profile successfuly updated"},status=status.HTTP_200_OK)
        print(serializer.errors)
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)

class ListPhotographerView(APIView):
    def get(self,request):
        query = PhotographerProfile.objects.all()
        serializer = ListPhotographerSerializer(query,many=True)
        return Response(serializer.data)

class PhotographerSearchView(ListAPIView):
    queryset = PhotographerProfile.objects.all()
    serializer_class = SearchPhotographerSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["user__email","user__first_name","user__last_name","speciality","location"]




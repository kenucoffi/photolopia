
from rest_framework import serializers
from .models import CustemUser,PhotographerProfile
from django.contrib.auth import authenticate
class CustemUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustemUser
        fields = ["id","email","first_name","last_name"]

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustemUser
        fields = ["email","password","first_name","last_name","user_type"]

    def create(self,validated_data):
        user = CustemUser.objects.create_user(**validated_data)
           
        return user

class LoginUserSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True)

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        else:
            raise serializers.ValidationError("incorrect credential")

class PhotographerProfileSerializer(serializers.ModelSerializer): 
    class Meta:
        model = PhotographerProfile
        fields = ["bio","location","profile_image","big_profile_image","speciality","phone","website","instagram",]


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustemUser
        fields = ["id","email","first_name","last_name"]
class ListPhotographerSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only =True)
    class Meta:
        model = PhotographerProfile
        fields = ["user","location","profile_image","big_profile_image","speciality","phone","website","bio"] 
class SearchPhotographerSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only =True)
    first_name = serializers.CharField(source="user.first_name",read_only=True)
    last_name = serializers.CharField(source="user.last_name",read_only=True)
    class Meta:
        model = PhotographerProfile
        fields = ["user","first_name","last_name","location","profile_image","big_profile_image","speciality","phone","website","bio"] 

from django.urls import path
from . import views
urlpatterns = [
    path("userdata",views.UserDataView.as_view()),
    path("register",views.RegisterUserView.as_view(),name="register"),
    path("login",views.LoginView.as_view()),
    path("logout",views.LogoutView.as_view()),
    path("refresh",views.CookieTokenRefreshView.as_view()),
    path("updateprofile",views.UpdateProfileView.as_view()),
    path("listphotographer",views.ListPhotographerView.as_view()),
    path("searchphotographer",views.PhotographerSearchView.as_view()), 
]

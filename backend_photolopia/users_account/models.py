from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager
from django.conf import settings
import uuid
# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # ✅ HASH password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class CustemUser(AbstractUser):
    USER_TYPES = [
        ('client', 'Client'),
        ('photographer', 'Photographer'),
    ]

    username = None  # Disable username
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPES)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()  # ✅ Correct name (NOT object)

    def __str__(self):
        return self.email



def profile_image_path(instance, filename):
        # use photographer's UUID to organize images
    return f'profile/{instance.uuid}/{filename}'

def big_profile_image_path(instance,filename):
    return f'bigprofile/{instance.uuid}/{filename}'

class PhotographerProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="photographer_profile")
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100)
    speciality = models.CharField(max_length=512)
    profile_image = models.ImageField(upload_to=profile_image_path, blank=True, null=True)
    big_profile_image = models.ImageField(upload_to=big_profile_image_path, blank=True ,null=True)
    phone = models.CharField(max_length=20, blank=True)
    website = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)



def portfolio_image_path(instance, filename):
    # use photographer's UUID to organize images
    return f'portfolios/{instance.photographer.uuid}/{filename}'

class Portfolio(models.Model):
    photographer = models.ForeignKey(PhotographerProfile, on_delete=models.CASCADE, related_name='portfolios')
    image = models.ImageField(upload_to=portfolio_image_path)
    caption = models.CharField(max_length=255, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.photographer.full_name}'s portfolio image"

class Client(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='client_profile')
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Client: {self.user.email}"
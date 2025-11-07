from django.db.models.signals import post_save 
from django.dispatch import receiver
from .models import CustemUser,PhotographerProfile,Client

@receiver(post_save,sender=CustemUser)
def create_user_profile(sender,instance,created,**kwargs):
    if created:
        if instance.user_type == "photographer":
            PhotographerProfile.objects.create(user=instance)
        elif instance.user_type == "client":
            Client.objects.create(user=instance)

@receiver(post_save,sender=CustemUser)
def save_user_profile(sender,instance,**kwargs):
    if instance.user_type == 'photographre' and hasattr(instance,"photographer_profile"):
        PhotographerProfile.save()
    elif instance.user_type == 'client' and hasattr(instance,"client"):
        Client.save()



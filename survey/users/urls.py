from django.urls import path, include
from users.views import homepage, register

urlpatterns = [
    path('homepage/', homepage, name="homepage"),
    path('register/', register, name="register"),
    path('accounts/', include('django.contrib.auth.urls')),
]

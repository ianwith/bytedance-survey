from django.shortcuts import redirect, render
from django.contrib.auth import login
from django.urls import reverse
from django import forms
from users.forms import UserCreationFromWithEmail
# Create your views here.


def homepage(request):
    return render(request, "users/homepage.html")


def register(request):
    if request.method == 'GET':
        return render(
            request,
            'users/register.html',
            {
                "form": UserCreationFromWithEmail
            }
        )
    elif request.method == 'POST':
        form = UserCreationFromWithEmail(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("homepage"))

        return render(
            request,
            'users/register.html',
            {
                "form": form
            }
        )

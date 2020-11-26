from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import DetailView, ListView
from django.contrib.auth.decorators import login_required
from django.forms.formsets import formset_factory
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser

from .forms import FormForm, QuestionForm
from .models import Form, Question, FormResponse
from .serializers import FormSerializer, QuestionSerializer, ResponseSerializer


@login_required
def form_create_view(request):
    return render(request, 'react_copy.html')

class FormView(ViewSet):
    def list(self, request):
        forms = Form.objects.all()
        serializer = FormSerializer(forms, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Form.objects.all()
        form = get_object_or_404(queryset, pk=pk)
        serializer = FormSerializer(form)
        return Response(serializer.data)

    def create(self, request):
        serializer = FormSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ResponseView(ViewSet):
    def create(self, request):
        serializer = ResponseSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
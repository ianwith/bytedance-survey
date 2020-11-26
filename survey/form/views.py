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


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def question_create_view(request, *args, **kwargs):
#     print(request.POST)
#     serializer = FormSerializer(data=request.POST)

#     if serializer.is_valid(raise_exception=True):
#         print(serializer.validated_data)
#         serializer.save(author=request.user)
#         return Response(serializer.data)
#     return Response({}, status=400)


def form_view(request, form_id):
    form = get_object_or_404(Form, pk=form_id)
    return render(request, 'form/detail.html', {'form': form})

def question_view(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'question/detail.html', {'question': question})


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
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
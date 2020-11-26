from django import forms

from .models import Form, Question

class FormForm(forms.ModelForm):
    class Meta:
        model = Form
        fields = [
            'title',
            'description'
        ]

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = [
            'question_text',
            'form'
        ]
    # question_text = forms.CharField()
    form = FormForm()

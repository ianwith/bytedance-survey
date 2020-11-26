from django.contrib import admin

# Register your models here.

from .models import Form, Question, Choice, FormResponse, Answer

class QuestionAdmin(admin.ModelAdmin):
    search_fields = ['question_text']
    class Meta:
        model = Question

admin.site.register(Form)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
admin.site.register(FormResponse)
admin.site.register(Answer)

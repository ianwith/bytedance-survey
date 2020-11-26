from rest_framework import serializers

from .models import Form, Question, Choice, FormResponse, Answer


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = [
            'id',
            'choice_text'
        ]

class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = [
            'id',
            'question_text',
            'choices'
        ]

class FormSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Form
        fields = [
            'id',
            'title',
            'description',
            'questions'
        ]

    def create(self, validated_data):
        questions_data = validated_data.pop('questions')
        form = Form.objects.create(**validated_data)
        for question_data in questions_data:
            choices_data = question_data.pop('choices')
            question = Question.objects.create(form=form, **question_data)
            choices = []
            for choice_data in choices_data:
                choices.append(Choice.objects.create(question=question, **choice_data))
            question.choices.set(choices)
        return form

class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = [
            'id',
            'question',
            'choice',
        ]

class ResponseSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = FormResponse
        fields = [
            'id',
            'form',
            'user_name',
            'user_email',
            'answers',
        ]

    def create(self, validated_data):
        print(validated_data)
        answers_data = validated_data.pop('answers')
        response = FormResponse.objects.create(**validated_data)
        for answer_data in answers_data:
            question = answer_data.pop('question')
            choice = answer_data.pop('choice')
            Answer.objects.create(response=response, question=question, choice=choice)
        return response

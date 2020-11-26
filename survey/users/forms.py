from django.contrib.auth.forms import UserCreationForm

class UserCreationFromWithEmail(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ("email",)

from rest_framework import serializers
from intern.models import Intern

class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = ['id', 'username', 'user_email', 'password', 'role','first_name','last_name','university_name','major','gender','cGpa'] 
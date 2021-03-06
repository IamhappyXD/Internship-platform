from rest_framework import serializers
from company.models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'username', 'user_email', 'password', 'role', 'company_name', 'description', 'city_name', 'address'] 
from rest_framework import viewsets
from company.models import Company
from company.serializers import CompanySerializer

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer

    def get_queryset(self):
        return Company.objects.all()
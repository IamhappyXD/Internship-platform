from rest_framework import viewsets
from intern.models import Intern
from intern.serializers import InternSerializer

class InternViewSet(viewsets.ModelViewSet):
    serializer_class = InternSerializer

    def get_queryset(self):
        return Intern.objects.all()
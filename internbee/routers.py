from rest_framework import routers
from company.viewsets import CompanyViewSet
router = routers.SimpleRouter()
router.register(r'company', CompanyViewSet, basename='company')
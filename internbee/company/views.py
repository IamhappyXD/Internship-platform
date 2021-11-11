from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from company.models import Company
from company.serializers import CompanySerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def company_list(request):
    if request.method == 'GET':
        company = Company.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            company = company.filter(title__icontains=title)
        
        company_serializer = CompanySerializer(company, many=True)
        return JsonResponse(company_serializer.data, safe=False)
    elif request.method == 'POST':
        company_data = JSONParser().parse(request)
        company_serializer = CompanySerializer(data=company_data)
        if company_serializer.is_valid():
            company_serializer.save()
            return JsonResponse(company_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(company_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # GET list of tutorials, POST a new tutorial, DELETE all tutorial

# @api_view(['GET', 'PUT', 'DELETE'])
# def company_detail(request, pk):
#     # find tutorial by pk (id)
#     # try: 
#     #     tutorial = Tutorial.objects.get(pk=pk) 
#         if request.method == 'GET': 
#             tutorial_serializer = TutorialSerializer(tutorial) 
#             return JsonResponse(tutorial_serializer.data)
#         elif request.method == 'PUT': 
#             tutorial_data = JSONParser().parse(request) 
#             tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
#             if tutorial_serializer.is_valid(): 
#                 tutorial_serializer.save() 
#                 return JsonResponse(tutorial_serializer.data) 
#             return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    # except Tutorial.DoesNotExist: 
    #     return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    
        
# @api_view(['GET'])
# def company_list_published(request):
#     # GET all published tutorials
 

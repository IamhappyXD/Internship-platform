from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from intern.models import Intern
from intern.serializers import InternSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def intern_list(request):
    if request.method == 'GET':
        intern = Intern.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            intern = intern.filter(title__icontains=title)
        
       intern_serializer = InternSerializer(intern, many=True)
        return JsonResponse(intern_serializer.data, safe=False)
    elif request.method == 'POST':
        intern_data = JSONParser().parse(request)
        intern_serializer = InternSerializer(data=intern_data)
        if intern_serializer.is_valid():
            intern_serializer.save()
            return JsonResponse(intern_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(intern_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
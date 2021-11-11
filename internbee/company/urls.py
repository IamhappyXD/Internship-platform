from django.conf.urls import url 
from company import views 
 
urlpatterns = [ 
    url(r'^api/company$', views.company_list),
    # url(r'^api/company/(?P<pk>[0-9]+)$', views.company_detail),
    # url(r'^api/company/published$', views.company_list_published)
]
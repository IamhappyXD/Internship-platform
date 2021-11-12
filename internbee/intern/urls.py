from django.conf.urls import url 
from intern import views 
 
urlpatterns = [ 
    url(r'^api/intern$', views.intern_list),
]


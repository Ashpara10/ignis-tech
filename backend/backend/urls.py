from django.urls import path,include

urlpatterns = [
    path('app/', include('myapp.urls')),
]

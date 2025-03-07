from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),


    #employee_login
    path('employee_login/', views.employee_login, name='employee_login'),
    path('create_employee/', views.create_employee, name='create_employee'),
]
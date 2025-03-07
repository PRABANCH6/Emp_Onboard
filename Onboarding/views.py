from django.shortcuts import render
from .models import Employee


# Create your views here.

def home(request):
    return render(request, 'home.html')

def employee_login(request):
    return render(request, 'accounts/Employee/emp_login.html')


def create_employee(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        
        # Check if employee already exists
        if Employee.objects.filter(email=email).exists():
            error_message = "Email already registered"
            return render(request, 'create_employee.html', {'error_message': error_message})
        
        # Create new employee
        new_employee = Employee(
            username=username,
            password=password,
            email=email
        )
        new_employee.save()
        
        success_message = f"New employee created successfully with ID: {new_employee.employee_id}"
        return render(request, 'register.html', {'success_message': success_message})
    
    return render(request, 'register.html')
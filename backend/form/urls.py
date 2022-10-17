from django.contrib import admin
from django.urls import path, include

from .views import (
   BaseFormApi
)


urlpatterns = [
    path('', BaseFormApi.as_view(), name='base-form-api')
]

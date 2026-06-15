from django.contrib import admin
from django.urls import path
from cv.views import cv_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', cv_view, name='cv_home'),  # Raíz del sitio enlazada al CV
]
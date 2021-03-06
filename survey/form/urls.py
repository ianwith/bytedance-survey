from django.urls import path, include
from django.views.generic import TemplateView
from form.views import form_create_view, FormView, ResponseView

urlpatterns = [
    path('api/forms/', FormView.as_view({'get': 'list', 'post': 'create'})),
    path('api/forms/<int:pk>', FormView.as_view({'get': 'retrieve'})),
    path('api/responses/', ResponseView.as_view({'post': 'create'})),
    path('forms/create', form_create_view, name="form_create"),
    path('forms/<int:form_id>', TemplateView.as_view(template_name='react_copy.html'), name="form_detail"),
    path('forms/', TemplateView.as_view(template_name='react_copy.html'), name="form_list")
]

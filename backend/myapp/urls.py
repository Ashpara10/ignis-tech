from django.urls import path
from .views import EventCreateView, EventListView,RegisterView,LoginView,GetAllEventsView,EventLikeToggleView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('events/create/', EventCreateView.as_view(), name='event-create'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('events/all/', GetAllEventsView.as_view(), name='get-event-list'),
    path('events/<int:pk>/toggle-like/', EventLikeToggleView.as_view(), name='event-toggle-like'),
]

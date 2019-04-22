from stores.models import Store
from rest_framework import viewsets, permissions
from .serializers import StoreSerializer


#Lead Viewset
class StoreViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = StoreSerializer

    def get_queryset(self):
        return self.request.user.stores.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

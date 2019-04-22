from rest_framework import routers
from .api import StoreViewSet

router = routers.DefaultRouter()
router.register('api/stores', StoreViewSet, 'stores')

urlpatterns = router.urls
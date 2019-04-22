from rest_framework import serializers
from stores.models import Store


#Lead Serializer
class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'

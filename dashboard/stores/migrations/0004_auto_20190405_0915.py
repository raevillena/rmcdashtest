# Generated by Django 2.1.7 on 2019-04-05 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0003_auto_20190403_1113'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='id',
        ),
        migrations.AlterField(
            model_name='store',
            name='messageID',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, unique=True),
        ),
    ]

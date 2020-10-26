# Generated by Django 3.1.2 on 2020-10-24 15:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='complited',
            new_name='completed',
        ),
        migrations.AddField(
            model_name='task',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='auth_ex.user'),
            preserve_default=False,
        ),
    ]
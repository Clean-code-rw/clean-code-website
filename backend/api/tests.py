from django.test import TestCase
from django.urls import reverse


class HealthEndpointTests(TestCase):
    def test_returns_ok(self):
        response = self.client.get(reverse('health'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['status'], 'ok')

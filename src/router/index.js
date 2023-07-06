import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import ScrambleWordWidget from '../components/ScrambleWordWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';

const routes = [
  { path: '/weather', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/scrambleword', component: ScrambleWordWidget},
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
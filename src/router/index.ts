import { createRouter, createWebHashHistory } from 'vue-router';
import HomeDoc from '../pages/HomeDoc.vue';
import DynamicBottomSheetDoc from '../pages/DynamicBottomSheetDoc.vue';
import FixedBottomSheetDoc from '../pages/FixedBottomSheetDoc.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeDoc,
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: DynamicBottomSheetDoc,
  },
  {
    path: '/fixed',
    name: 'fixed',
    component: FixedBottomSheetDoc,
  },
];

const router = createRouter({
  // Hash history: no requiere configuración de servidor, ideal para GitHub Pages
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;

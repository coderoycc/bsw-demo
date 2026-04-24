import { createRouter, createWebHashHistory } from "vue-router";
import HomeDoc from "../pages/HomeDoc.vue";
import DynamicBottomSheetDoc from "../pages/DynamicBottomSheetDoc.vue";
import SimpleBottomSheetDoc from "../pages/SimpleBottomSheetDoc.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeDoc,
	},
	{
		path: "/dynamic",
		name: "dynamic",
		component: DynamicBottomSheetDoc,
	},
	{
		path: "/simple",
		name: "simple",
		component: SimpleBottomSheetDoc,
	},
];

const router = createRouter({
	// Hash history: no requiere configuración de servidor, ideal para GitHub Pages
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0, behavior: "smooth" };
	},
});

export default router;

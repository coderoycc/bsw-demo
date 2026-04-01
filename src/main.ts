import { createApp } from 'vue'
import './style.css'
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";
import BottomSheetPlugin from "@coderoycc/bottom-sheet-wrappers";
import App from './App.vue'
const app = createApp(App)
app.use(BottomSheetPlugin)
app.mount('#app')

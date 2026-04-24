import { ref, watch } from "vue";

const STORAGE_KEY = "bsw-dark-mode";

// ─── Leer el estado inicial SINCRÓNICAMENTE al cargar el módulo ───────────────
// Así el ref ya tiene el valor correcto antes de que cualquier watchEffect corra.
function getInitialValue(): boolean {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored !== null) {
		return stored === "true";
	}
	// Fallback: preferencia del sistema operativo
	return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

// Singleton reactivo - se comparte entre todos los componentes
const isDark = ref<boolean>(getInitialValue());

// Aplicar la clase al <html> inmediatamente, sin esperar al montaje
function applyDarkMode(value: boolean) {
	document.documentElement.classList.toggle("dark", value);

	// Cambiar variables CSS para BSW usando los pivotes del sistema
	const body = document.body;
	body.style.setProperty("--bsw-background", value ? "#1e1e2e" : "#ffffff");
	body.style.setProperty("--bsw-text-color", value ? "#cdd6f4" : "#111827");
	body.style.setProperty(
		"--bsw-muted-color",
		value ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.5)",
	);
	body.style.setProperty(
		"--bsw-box-shadow",
		value ? "0 -2px 20px rgba(0, 0, 0, 0.5)" : "0 -2px 20px rgba(0, 0, 0, 0.15)",
	);

	// Eliminamos overrides específicos redundantes para que usen los fallbacks:
	// --bsw-header-color -> hereda de --bsw-text-color
	// --bsw-content-color -> hereda de --bsw-text-color
	// --bsw-handle-background -> hereda de --bsw-muted-color
	// --bsw-close-btn-color -> hereda de --bsw-muted-color
	body.style.removeProperty("--bsw-header-color");
	body.style.removeProperty("--bsw-handle-background");
	body.style.removeProperty("--bsw-close-btn-color");
	body.style.removeProperty("--bsw-close-btn-hover-color");
}

// Aplicar en el arranque
applyDarkMode(isDark.value);

// ─── Composable exportado ──────────────────────────────────────────────────────
export function useDarkMode() {
	// watch (no watchEffect) para que NO corra inmediatamente con el valor inicial
	// y así evitar sobreescribir localStorage con `false` antes de leerlo.
	watch(isDark, (value) => {
		applyDarkMode(value);
		localStorage.setItem(STORAGE_KEY, String(value));
	});

	function toggle() {
		isDark.value = !isDark.value;
		localStorage.setItem(STORAGE_KEY, String(isDark.value));
	}

	return {
		isDark,
		toggle,
	};
}

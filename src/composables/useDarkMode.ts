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
	// cambiar variables CSS para BSW
	const body = document.body;
	body.style.setProperty("--bsw-background", value ? "#1e293b" : "#ffffff");
	body.style.setProperty(
		"--bsw-close-btn-color",
		value ? "#ffffff" : "#1e293b",
	);

	body.style.setProperty(
		"--bsw-close-btn-hover-color",
		value ? "#cfcfcf" : "#1e293b",
	);

	body.style.setProperty("--bsw-text-color", value ? "#ffffff" : "#1e293b");
	body.style.setProperty(
		"--bsw-handle-background",
		value ? "#ffffff" : "#1e293b",
	);
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

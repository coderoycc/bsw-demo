import { ref, watch } from "vue";

const STORAGE_KEY = "bsw-dark-mode";

function getInitialValue(): boolean {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored !== null) {
		return stored === "true";
	}
	return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

const isDark = ref<boolean>(getInitialValue());

function applyDarkMode(value: boolean) {
	document.documentElement.classList.toggle("dark", value);

	const body = document.body;
	body.style.setProperty("--bsw-background", value ? "#1e1e2e" : "#ffffff");
	body.style.setProperty("--bsw-text-color", value ? "#cdd6f4" : "#111827");
	body.style.setProperty(
		"--bsw-muted-color",
		value ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.5)",
	);
	body.style.setProperty(
		"--bsw-box-shadow",
		value
			? "0 -2px 20px rgba(0, 0, 0, 0.5)"
			: "0 -2px 20px rgba(0, 0, 0, 0.15)",
	);

	body.style.removeProperty("--bsw-header-color");
	body.style.removeProperty("--bsw-handle-background");
	body.style.removeProperty("--bsw-close-btn-color");
	body.style.removeProperty("--bsw-close-btn-hover-color");
}

applyDarkMode(isDark.value);

export function useDarkMode() {
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

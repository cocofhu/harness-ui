import { createApp } from "vue";
import App from "./App.vue";
import { setupScrollbars } from "./lib/scrollbars";
import "./styles/base.css";
import "./styles/motion.css";
import "./styles/scrollbars.css";
import "./styles/hover-ink.css";

const cleanupScrollbars = setupScrollbars();
if (import.meta.hot) import.meta.hot.dispose(cleanupScrollbars);

createApp(App).mount("#app");

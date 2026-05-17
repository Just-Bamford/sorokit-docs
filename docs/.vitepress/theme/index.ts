import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // Preserve any default theme behavior, then force dark appearance globally.
    DefaultTheme.enhanceApp?.(ctx);
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
      // Helps native form controls match the forced dark theme.
      document.documentElement.style.colorScheme = "dark";
    }
  },
};

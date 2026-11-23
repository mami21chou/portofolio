import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: v("canvas"),
        surface: v("surface"),
        fg: v("fg"),
        muted: v("muted"),
        line: v("line"),
        soft: v("soft"),
        accent: v("accent"),
        accentfg: v("accentfg"),
        deep: v("deep"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: { silk: "cubic-bezier(0.76, 0, 0.24, 1)" },
    },
  },
  plugins: [],
};
export default config;

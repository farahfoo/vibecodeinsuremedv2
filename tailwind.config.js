/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#c2c7d1",
        "inverse-surface": "#213145",
        "on-secondary-fixed-variant": "#40484e",
        "on-error": "#ffffff",
        "surface": "#f8f9ff",
        "secondary": "#585f66",
        "on-secondary-container": "#5e656c",
        "on-surface-variant": "#42474f",
        "on-primary-fixed-variant": "#07497d",
        "on-secondary-fixed": "#151c22",
        "primary-fixed": "#d2e4ff",
        "surface-container-low": "#eff4ff",
        "tertiary-fixed": "#6bff8f",
        "surface-container": "#e5eeff",
        "surface-variant": "#d3e4fe",
        "tertiary-container": "#005623",
        "surface-dim": "#cbdbf5",
        "inverse-primary": "#a0c9ff",
        "surface-container-highest": "#d3e4fe",
        "on-tertiary-fixed-variant": "#005321",
        "surface-bright": "#f8f9ff",
        "outline": "#727780",
        "on-primary": "#ffffff",
        "on-error-container": "#93000a",
        "on-primary-fixed": "#001c37",
        "secondary-fixed": "#dce3eb",
        "primary-container": "#0f4c81",
        "on-primary-container": "#8ebdf9",
        "background": "#f8f9ff",
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#a0c9ff",
        "secondary-container": "#dce3eb",
        "inverse-on-surface": "#eaf1ff",
        "surface-tint": "#2d6197",
        "secondary-fixed-dim": "#c0c7cf",
        "on-tertiary": "#ffffff",
        "on-background": "#0b1c30",
        "tertiary-fixed-dim": "#4ae176",
        "on-tertiary-fixed": "#002109",
        "primary": "#00355f",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#dce9ff",
        "on-surface": "#0b1c30",
        "tertiary": "#003c16",
        "error": "#ba1a1a",
        "on-tertiary-container": "#39d36a",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "unit": "8px",
        "container-max": "1200px",
        "gutter": "24px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    fontSize: {
      xxs: ".625rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4rem",
      h1: ["90px", { lineHeight: "81px" }],
      h4: ["20px", { lineHeight: "18px" }],
    },
    extend: {
      colors: {
        BrandSalmon: "#FF8D7D",
        BrandGray: "#272727",
      },
      fontFamily: {
        mona: ['"Mono Sans Expanded"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        semi: 600,
        med: 500,
        light: 300,
        exlight: 200,
      },
      fontSize: {
        h1: ["90px", { lineHeight: "81px" }],
        h2: ["72px", { lineHeight: "75px" }],
        h3: ["40px", { lineHeight: "36px" }],
        h4: ["20px", { lineHeight: "18px" }],
        h4small: ["18px", { lineHeight: "16.2px" }],
        body: ["16px", { lineHeight: "22.4px" }],
        bodysmall: ["14px", { lineHeight: "20px" }],
      },
    },
  },
  plugins: [],
};

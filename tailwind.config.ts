import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        "bgprimary": "#92a9a9",
        "bgsecondary": "#efefef",
        "textprimary": "#111111",
      },
    },
  },
  plugins: [],
};
export default config;

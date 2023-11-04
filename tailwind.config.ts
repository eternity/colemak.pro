import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: { logs: false },
};

export default config;

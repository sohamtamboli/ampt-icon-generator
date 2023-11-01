import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        '76': '308px',
        '85':'350px'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#60a5fa'
        },
        secondary: {
          DEFAULT: '#1e40af',
          light: '#3b82f6'
        }
      }
    }
  },
  plugins: []
}
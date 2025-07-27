export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: ['scrollbar-none'], // ✅ THIS LINE IS IMPORTANT
  plugins: [],
}

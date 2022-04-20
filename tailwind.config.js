module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'custom-spacing': '.25em'
      },
      colors: {
        // Configure your color palette here
        'custom-gray': '#2c2d30',
        'custom-black': '#151619'
      }
    },
  },
  plugins: [],
}

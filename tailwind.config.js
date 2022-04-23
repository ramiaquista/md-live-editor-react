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
        'custom-gray-title': '#1e1f22',
        'custom-vertical-line': '#38393c',
        'custom-black': '#151619'
      }
    },
  },
  plugins: [],
}

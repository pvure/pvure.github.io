/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'title': '#FFFFFF',
      'about': '#151B29',
      'projects': '#F2F2F2',
      'hobbies': '#e6e6e6',
      'footer': '#F9F9F9',

      'title-dark': '#FFFFFF',
      'title-light': '#000000',

      'blurb-dark': '#F9F9F9',
      'blurb-light': '#333333',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

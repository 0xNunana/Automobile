/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'checki-orange':'#fe5c3d',
       
        
      },
      textColor:{
        'checki-gray':'#f3f3f3',
        'checki-hero':'#f9f9f9',
        'checki-heroText':'#454545',
        'checki-route':'#b7b7b7'
      }
    },
  },
  plugins: [],
}

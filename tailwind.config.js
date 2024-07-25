import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      backgroundColor: {
        'theme-default': '#FEF3E2'
      },
      fontFamily: {
        'theme-retro': 'Retro'
      }
    }
  },
  plugins: [daisyui]
}

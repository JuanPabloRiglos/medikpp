/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00c9a7', // Verde agua
        secondary: '#98b0a9', // Gris verdoso
        accent: '#4abaff', // Celeste vibrante
        muted: '#a0acbd', // Gris azulado
        contrast: '#4444a5', //Violeta casi azul, imagen de home
        light: '#f9f9f9', // Casi blanco
        dark: '#111111', // Casi negro
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.7s ease-out forwards',
        slideOutLeft: 'slideOutLeft 0.7s ease-in forwards',
      },
    },
  },
  plugins: [],
};

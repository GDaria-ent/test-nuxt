/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
  ],
  theme: {
      container: {
          padding: {
              DEFAULT: '1.2rem',
              '2xl': '1.25rem'
          },
          screens: {
              xl: '1280px'
          },
          center: true
      },
    extend: {
        fontFamily: {
            regular: ['Lato-Regular', 'sans-serif'],
            semibold: ['Lato-Semibold', 'sans-serif'],
            bold: ['Lato-Black', 'sans-serif']
        },
        colors: {
            base: {
                strong: '#2A2C1F',
                weak: '#FFFFFF'
            },
            faint: {
                strong: '#65665C',
                'strong-u': '#737680',
                DEFAULT: '#E7E8E3',
                weak: '#FAE8E1'
            },
            accent: {
                DEFAULT: '#CF6F49',
                strong: '#d3450d'
            },
            complement: {
                DEFAULT: '#939878',
                weak:'#f5f5f2'
            }
        }
    },
  },
  plugins: [],
}


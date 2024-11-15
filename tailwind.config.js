export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montaga'],
      },
      colors: {
        primary: {
          50: '#fbf6f1',
          100: '#f5eadf',
          200: '#ebd2bd',
          300: '#deb393',
          400: '#cf8e68',
          500: '#c6754d',
          600: '#b75f3f',
          700: '#984a36',
          800: '#7b3e31',
          900: '#64342a',
          950: '#351915',
        },
        secondary: {
          50: '#f4f4f2',
          100: '#e4e4dd',
          200: '#cbcabd',
          300: '#aeaa96',
          400: '#97917a',
          500: '#87806b',
          600: '#746b5a',
          700: '#5e564a',
          800: '#514a42',
          900: '#48413b',
          950: '#282320',
        },

        'neutral-black': {
          50: '#fff9ed',
          100: '#fff1d5',
          200: '#fddfab',
          300: '#fbc776',
          400: '#f9a53e',
          500: '#f68919',
          600: '#e76e0f',
          700: '#c0540e',
          800: '#984214',
          900: '#7b3813',
          950: '#2b1105',
        },

        'neutral-white': {},

        'neutral-neutral': {
          50: '#f5f8fa',
          100: '#eaeff4',
          200: '#cfdde8',
          300: '#a5c0d4',
          400: '#759ebb',
          500: '#5483a3',
          600: '#416988',
          700: '#35546f',
          800: '#2f485d',
          900: '#2b3e4f',
          950: '#22303e',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

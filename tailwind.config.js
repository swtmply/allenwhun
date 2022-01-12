module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["'Inter'", 'sans-serif'],
      serif: ["'Lora'", 'serif'],
      mono: ["'Roboto Mono'", 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      pink: {
        300: '#DF4D7A',
        400: '#C82456',
      },
      blue: {
        300: '#1774D1',
        400: '#10559A',
      },
      gray: {
        50: '#F5F5F5',
        100: '#EDEDED',
        200: '#B5B5B5',
        500: '#3F3F3F',
        700: '#303030',
        cool: '#C8CFDA',
      },
    },
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(0.7)', opacity: 0.5 },
        },
      },
      animation: {
        'pulse-scale': 'pulseScale 7s linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.stone.600'),
            // a: {
            //   color: theme('colors.pink.400'),
            //   '&:hover': {
            //     color: theme('colors.pink.500'),
            //   },
            // },
          },
        },
        dark: {
          css: {
            // color: theme('colors.neutral.300'),
            // a: {
            //   color: theme('colors.pink.400'),
            //   '&:hover': {
            //     color: theme('colors.pink.500'),
            //   },
            // },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};

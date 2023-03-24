/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(55% 36% at 50% 50%, rgba(12, 74, 110, 0.2) 0%, rgba(24, 26, 31, 0.066) 100%)',
      },
      colors: {
        zm: {
          50: '#71787e',
          100: '#666d73',
          200: '#5b6269',
          300: '#51575e',
          400: '#474c54',
          500: '#3d4249',
          600: '#33373f',
          700: '#2a2d34',
          800: '#21242a',
          900: '#181a1f',
        },
        'zm-light': {
          50: '#dfe2e4',
          100: '#d3d7da',
          200: '#c8ccd0',
          300: '#bcc2c5',
          400: '#b1b7bb',
          500: '#a6acb1',
          600: '#9ba2a7',
          700: '#90979d',
          800: '#868d92',
          900: '#7b8288',
        },
      },
      fontFamily: {
        roboto: 'Roboto',
        inter: 'Inter',
      },
      keyframes: {
        caroseulTransition: {
          '0%': {
          },
          '100%': {
            transform: ' translateX(-500px)',
          }
        },
        roundedHover: {
          '0%': {
            borderRadius: '9999px',
          },
          '50%': {
            borderRadius: '24px',
          },
          '100%': {
            borderRadius: '16px',
          },
        },
        enter: {
          from: {
            opacity: 0,
            transform: 'scale(0.5)',
            transition: 'all 150ms',
          },
          to: {
            opacity: 100,
            transform: 'scale(1)',
            transition: 'all 150ms',
          },
        },
        leave: {
          from: {
            opacity: 100,
            transform: 'scale(1)',
            transition: 'all 150ms',
          },
          to: {
            opacity: 0,
            transform: 'scale(0.5)',
            transition: 'all 150ms',
          },
        },
        blurBackdrop: {
          from: {
            opacity: 0,
            transition: 'all 150ms',
          },
          to: {
            opacity: '20',
            transition: 'all 150ms',
          },
        },
      },
      animation: {
        modelBackdrop: 'blurBackdrop 150ms linear 1 forwards',
        roundedOn: 'roundedHover 250ms linear 1 forwards',
        enter: 'enter 150ms linear 1 forwards',
        leave: 'leave 150ms linear 1 forwards',
        caro: 'caroseulTransition 500ms ease-in-out 1 forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};


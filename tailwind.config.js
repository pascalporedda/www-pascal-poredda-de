/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
  /**
   * Stylesheet generation mode.
   *
   * Set mode to "jit" if you want to generate your styles on-demand as you author your templates;
   * Set mode to "aot" if you want to generate the stylesheet in advance and purge later (aka legacy mode).
   */
  mode: 'jit',

  purge: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}',
    './util/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#111217',
      turquoise: {
        800: '#75e3ea',
        DEFAULT: '#2ec5ce',
        100: '#d5fafc',
      },
      purple: {
        800: '#d6b1ff',
        DEFAULT: '#8c30f5',
        100: '#f1e4ff',
      },
      orange: {
        DEFAULT: '#fe9a22',
        800: '#ffc278',
        100: '#ffe3c1',
      },
      pink: {
        DEFAULT: '#f22bb2',
        800: '#ff72d2',
        100: '#ffb1e6',
      },
      gray: {
        900: '#111217',
        875: '#121212',
        850: '#222222',
        800: '#424242',
        700: '#898c91',
        DEFAULT: '#d9dbe1',
        300: '#d9dbe1',
        200: '#eeeff4',
        100: '#f4f5f7',
      },
      accent: {
        green: '#1db954',
        blue: '#c0dae5',
        peach: '#f39f9f',
        'light-peach': '#fdd9d9',
        candy: '#ffc3d8',
        cyan: '#a0dcff',
        red: '#ff0000',
      },
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        scale: 'scale 0.25s ease-in-out',
      },
      gridTemplateColumns: {
        post: '14rem 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    /**
     * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
     * for forms. If you don't like it or have own styling for forms,
     * comment the line below to disable '@tailwindcss/forms'.
     */
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

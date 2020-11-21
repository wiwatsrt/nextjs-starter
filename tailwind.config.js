const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

function rgba(hex, alpha) {
  const { red, green, blue } = hexRgb(hex)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F9FE',
          100: '#F0F2FD',
          200: '#D9DFFA',
          300: '#C2CBF7',
          400: '#94A5F0',
          500: '#667EEA',
          600: '#5C71D3',
          700: '#3D4C8C',
          800: '#2E3969',
          900: '#1F2646',
        },
        // New default gray
        gray: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#252f3f',
          900: '#161e2e',
        },
      },
      boxShadow: (theme) => ({
        focus: `0 0 0 3px ${rgba(theme('colors.primary.300'), '.45')}`,
      }),
      maxWidth: {
        '7xl': '80rem',
      },
      height: {
        96: '24rem',
      },
    },
    customForms: (theme) => ({
      default: {
        'checkbox, input, textarea, multiselect, select': {
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${rgba(theme('colors.primary.300'), '.45')}`,
            borderColor: theme('colors.primary.300'),
          },
        },
        checkbox: {
          color: theme('colors.primary.500'),
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        '.button': {
          padding: '.5rem 1rem',
          borderWidth: theme('borderWidth.default'),
          borderColor: theme('borderColor.transparent'),
          borderRadius: theme('borderRadius.md'),
          fontWeight: '600',
          fontSize: theme('fontSize.sm'),
          '&:focus': {
            outline: 'none',
          },
        },
        '.button-primary': {
          backgroundColor: theme('colors.primary.600'),
          color: theme('colors.white'),
          '&:focus': {
            boxShadow: `0 0 0 3px ${rgba(theme('colors.primary.300'), '.45')}`,
          },
          '&:hover': {
            backgroundColor: theme('colors.primary.500'),
            borderColor: theme('colors.primary.300'),
          },
        },
      }
      const table = {
        '.table': {
          minWidth: '100%',
        },
        '.table th': {
          padding: '.75rem 1.5rem ',
          fontWeight: '500',
          color: theme('colors.gray.500'),
          backgroundColor: theme('colors.gray.50'),
        },
        '.table td': {
          padding: '1rem 1.5rem ',
          color: theme('colors.gray.500'),
          whiteSpace: 'nowrap',
        },
      }

      addComponents([buttons, table])
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        blue: 'rgb(var(--blue) / <alpha-value>)',
        red: 'rgb(var(--red) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'print-sm': '2px 2px 0 0 rgb(var(--ink))',
        'print': '4px 4px 0 0 rgb(var(--ink))',
        'print-lg': '6px 6px 0 0 rgb(var(--ink))',
        'print-blue-sm': '3px 3px 0 0 rgb(var(--blue))',
        'print-blue': '5px 5px 0 0 rgb(var(--blue))',
        'print-red': '4px 4px 0 0 rgb(var(--red))',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

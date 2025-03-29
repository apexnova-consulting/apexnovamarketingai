/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0057FF",
          50: "#E6EDFF",
          100: "#CCDCFF",
          200: "#99B8FF",
          300: "#6695FF",
          400: "#3371FF",
          500: "#0057FF", // Main brand color
          600: "#0046CC",
          700: "#003499",
          800: "#002366",
          900: "#001133",
        },
        secondary: {
          DEFAULT: "#2E3A59",
          50: "#E8EAEF",
          100: "#D1D5DF",
          200: "#A3ABBF",
          300: "#75819F",
          400: "#47577F",
          500: "#2E3A59", // Secondary color
          600: "#252F47",
          700: "#1C2335",
          800: "#131823",
          900: "#0A0C12",
        },
        accent: {
          DEFAULT: "#00C9A7",
          50: "#E6FAF7",
          100: "#CCF5EF",
          200: "#99EBDF",
          300: "#66E0CF",
          400: "#33D6BF",
          500: "#00C9A7", // Accent color
          600: "#00A186",
          700: "#007964",
          800: "#005043",
          900: "#002821",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center"
          }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        }
      },
    },
  },
  plugins: [],
} 
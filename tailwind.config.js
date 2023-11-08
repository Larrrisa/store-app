/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "main-gray": "#F4F4F4",
        "second-gray": "#EFEFEF",
        "font-black": "#33394F",
        "font-gray": "#7B7F8D",
        "font-light-gray": "#BDC1D0",
        "green-btn": "#CFF75E",
        "red-btn": "#F75E5E",
        "blue-btn": "#5EAEF7",
        "blue-menu": "#2D3242",
        "font-submenu": "#C1C3C8",
      },

      height: {
        "628px": "628px",
      },
      borderWidth: {
        3: "3px",
      },

      width: {
        144: "40rem",
        98: "29rem",
        99: "32rem",
        100: "50rem",
        102: "70rem",
        101: "101px",
        826: "826px",
      },

      fontSize: {
        "10px": "10px",
        "32px": "32px",
      },

      spacing: {
        "29px": "29px",
        "30px": "30px",
        "45px": "45px",
        "50px": "50px",
        "55px": "55px",
        "59px": "59px",
        "60px": "60px",
        "70px": "70px",
        "75px": "75px",
        "100px": "100px",
        "148px": "148px",
        "190px": "190px",
        "201px": "201px",
        "198px": "198px",
        "400px": "400px",
        "965px": "60rem",
        17.5: "17.5rem",
      },
      screens: {
        "2xl": { max: "1700px" },
        xl: { max: "1315px" },
        // => @media (max-width: 1535px) { ... }
      },

      gridTemplateColumns: {
        listing: "257px 1234px",
      },
    },
  },
  plugins: [],
};

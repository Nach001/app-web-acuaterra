/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta de colores proporcionada siguiendo los colores de ACUATERRA
        primary: "#44cbd3",
        secondary: "#3cacac",
        tertiary: "#34969e",
        quaternary: "#84bd7d",  
        quinary: "#7fb050",
        lightGray: "#ccd7d6",
        greenish: "#6ca09c",
        teal: "#649c94",
        darkGray: "#5d7a7e", //ErrorMesagge color
        veryDark: "#303537",
        
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],// Fuentes especificadas para el proyecto
      },
      // Definir tamaños para encabezados (usando rem; 1rem = 16px)
      fontSize: {
        h1: ["1.75rem", { lineHeight: "2.25rem" }], // 28px aprox.
        h2: ["1.5rem", { lineHeight: "2rem" }],       // 24px aprox.
        h3: ["1.25rem", { lineHeight: "1.75rem" }],    // 20px aprox.
      },
      
    },
  },
  plugins: [],
};

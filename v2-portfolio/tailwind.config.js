/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      peachyellow: '#F6DCAC',
      giantsorange: '#F85525',
      retrooceanblue: '#01204E',
      retrobabyblue: '#028391',
      retrobrown: '#915018',
    },
    extend: {},
    fontFamily: {
      logo: ["Great Vibes"],
      nav: ["Jacquard 24"]
    }
  },
  plugins: [],
}

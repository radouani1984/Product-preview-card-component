/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                cprimary: {
                    "darkCyan": "#3c8067",
                    "cream": "#f2ebe3"
                },
                cneutral: {
                    "vdb": "#1c232b",
                    "dgb": "#6c7289",
                },
            },
            fontFamily: {
                'primary': ['Montserrat', 'serif'],
                'secondary': ['Fraunces', 'serif'],

            },
        },

    },
    plugins: [],
}
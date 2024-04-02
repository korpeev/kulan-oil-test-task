/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js'
export default {
    content: ['./src/**/*.{js,ts,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#EF363C',
                'custom-gray': '#F6F6F6',
                link: '#583899',
                ...colors,
            },
            fontFamily: {
                mulish: ['Mulish'],
            },
        },
    },
    plugins: [],
}

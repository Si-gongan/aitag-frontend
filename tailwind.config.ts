/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) };
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) };
const rem0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i / 10}rem`) };

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_2000,
      minHeight: rem0_2000,
      spacing: rem0_2000,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#EBEAFE',
          100: '#D7D6FC',
          200: '#AFACFA',
          300: '#8783F7',
          400: '#5F59F5',
          500: '#4C80F1',
          600: '#150EDA',
          700: '#100AA4',
          800: '#0B076D',
          900: '#050337',
        },
        secondary: {
          100: '#F8F2FF',
          200: '#F1E5FF',
          300: '#E9D7FF',
          400: '#E2CAFF',
          // default: "#DBBDFF",
          600: '#AB64FF',
          700: '#7A0BFF',
          800: '#5100B2',
          900: '#280059',
        },
        dark: {
          light: '#211E9D',
          default: '#131159',
          dark: '#0B0A35',
          500: '#4D5256',
          950: '#1A1C1F',
        },
        gray: {
          6: '#878D91',
          600: '#777777',
        },
        white: '#FFF',
        overlay: 'rgba(0, 0, 0, 0.60)',
        'brand/mainblue-d1': '#2c5ae9',
        'brand/mainblue-0': '#4c80f1',
        'brand/mainblue-l1': '#87b1f3',
        'grey/0': '#f8fafb',
        'grey/1': '#f1f5f5',
        'grey/2': '#eaeeef',
        'grey/3': '#e1e4e6',
        'grey/4': '#ced3d6',
        'grey/5': '#a9afb3',
        'grey/6': '#878d91',
        'grey/7': '#4d5256',
        'grey/8': '#363a3c',
        'grey/9': '#292a2b',
        'sub/green-d1': '#1bbf83',
        'sub/green-0': '#35d48d',
        'sub/green-l1': '#76e8ad',
        'sub/red-d1': '#f24147',
        'sub/red-0': '#ff5d5d',
        'sub/red-l1': '#ff8e89',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      zIndex: {
        DEFAULT: '1',
        dropdown: '200',
        sticky: '400',
        popover: '600',
        overlay: '800',
        modal: '1000',
        toast: '1200',
      },
    },
  },
  plugins: [],
};

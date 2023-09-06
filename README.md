# React Fundraiser App

```bash
The app is created to make fundraising a seamless process where the goal,balance and contributions are displayed in real-time so that there is no need for a treasurer to do the math manually thus saving time and simplifying the process.

The App should be able to do the following;
1. Connect to the MPESA Api to retrieve real-time contributions,sum them up and display the figure.
2. compare real-time contributions against  the target and display the progress in terms of percentage.
```
## Installation

Create your project

```bash
npm create vite@latest fundraiser-app -- --template react
cd fundraiser-app
```
Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure your template paths.Add the paths to all of your template files in your tailwind.config.js file.

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the Tailwind directives to your CSS.Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Start your build process

```bash
npm run dev
```

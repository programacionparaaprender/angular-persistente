# AngularPersistente

### busqueda
>- como funciona action, effects, facade, reducer, selector, state en los store de angular, añadirlo luego al app.config.ts

### instalar tailwin
>- https://tailwindcss.com/docs/guides/angular
>- npm install -D tailwindcss postcss autoprefixer
>- npx tailwindcss init

### tailwind.config.js
`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Asegúrate de que Tailwind analice todos los archivos HTML y TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`

### postcss.config.js
`
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`

### src/styles.css
`
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

`



##
>- estados persistentes en angular 18 standalone con ngrx
>- estados persistentes en angular 18 standalone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

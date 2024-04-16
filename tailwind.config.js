  // tailwind.config.js
  module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        width : {
          "70" : "70%",
          "40" : "40%"
        }
       },
     },
     variants: {},
     plugins: [],
   }
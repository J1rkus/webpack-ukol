const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // TODO: Webpack neumí číst SCSS. Přidej sem pravidlo (module.rules),
  // které soubory .scss zpracuje třemi loadery:
  // sass-loader, css-loader a style-loader (pozor na pořadí).
};

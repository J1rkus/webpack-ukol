# Úkol: oprav Webpack build

Projekt používá Webpack a styl je napsaný v **SCSS** (`src/style.scss`). Webpack ale SCSS sám neumí, takže build spadne.

## Postup
1. V terminálu dole spusť:
   ```
   npm install
   npm run build
   ```
2. Build selže s chybou `Module parse failed … You may need an appropriate loader`.
3. Otevři `webpack.config.js` a přidej pravidlo (`module.rules`), které soubory `.scss` zpracuje třemi loadery: **style-loader, css-loader a sass-loader**. Pozor na pořadí!
4. Spusť znovu `npm run build`. **Hotovo, když build projde bez chyby.**

Nápověda: loadery v poli `use` se spouštějí **zprava doleva**.

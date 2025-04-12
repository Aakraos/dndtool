import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact },
    extends: [
      "js/recommended",
      "plugin:react/recommended", // Aggiunta configurazione di React
    ],
    parser: "@babel/eslint-parser", // Usa il parser di Babel
    parserOptions: {
      babelOptions: {
        presets: ["@babel/preset-react"], // Supporta JSX
      },
      requireConfigFile: false, // Non richiede un file di configurazione Babel
    },
    rules: {
      "react/prop-types": "off", // Disabilita il controllo dei prop-types di React
      "no-unused-vars": "warn", // Mostra un avviso per variabili non utilizzate
      "no-console": "off", // Disabilita il controllo per l'uso di console.log
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser }, // Definisce le variabili globali per il browser
  },
]);
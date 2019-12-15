BABEL
Convierte js moderno a uno que todos los navegadores puedan comprender.

INSTALACIÓN:

npm i @babel/core babel-loader @babel/preset-en v @babel/preset-react --save -D
@babel/core :
incluye todas las herramientas para transformar a codigo moderno nuestro js
babel-loader:
se encarga de trabajar con webpack
@babel/preset-env:
@babel/preset-react:
Ayudan a entender y transformar nuestro código tanto de javascript como de react

creamos .babelrc indicando los presets usados
{
"presets": [
"@babel/preset-env".
"@babel/preset-react"
]
}

WEBPACK
Nos ayuda a preparar nuestro proyect, para un entorno de desarrollo local o para mandarlo a producción.
Se encarga de los archivos (js, html, css, multimedia) los agrupa y los optimiza para enviarlos a producción.

INSTALACIÓN
npm i webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server --save -D

SCRIPT PARA PRODUCCIÓN
"build": "webpack --mode production",

SCRIPT PARA MODO DESARROLLO
"start": "webpack-dev-server --open --mode development"

SASS
Pre procesador CSS, permite trabajar con variables, mixins, etc.

INSTALACIÓN
npm i mini-css-extract-plugin css-loader node-sass sass-loader
--save -D

mini-css-extract-plugin:
permite extraer el css del bundle resultante para poder crear un nuevo archio de CSS

css-loader:
loader para webpack

node-sass:
agrega la compatibilidad con SASS

En webpack añadimos la siguiente regla:
const MiniCssExractPlugin = require('mini-css-extract-plugin');

      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }

En plugins agregamos:
  
 new MiniCssExractPlugin({
filename:'assets/[name].css'
})

ESlint

Es una herramienta que analiza el código JavaScript y JSX en busqueda de errores que podrían provocar problemas de compilación o bien futuros bugs en nuestro desarrollo. Cuando los encuentra, o bien los repara de forma automática o bien nos advierte de ellos a través de distintos mensajes, basándose para ello en un conjunto de reglas definidas previamente y que son altamente configurables.

INSTALACIÓN
 npm i eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

KFDSGKDSLG

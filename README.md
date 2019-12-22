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
IMÁGENES CON WEBPACK
npm i file-loader --save -D

webpack.config.js 
rules:
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name : 'assets/[hash].[ext]'
            }
          }
        ],
      }

ESlint

Es una herramienta que analiza el código JavaScript y JSX en busqueda de errores que podrían provocar problemas de compilación o bien futuros bugs en nuestro desarrollo. Cuando los encuentra, o bien los repara de forma automática o bien nos advierte de ellos a través de distintos mensajes, basándose para ello en un conjunto de reglas definidas previamente y que son altamente configurables.

INSTALACIÓN
 npm i eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

babel-eslint le permite a ESLint entender el código JavaScript que escribimos con Babel.
.eslintrc
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["airbnb"],
  "globals": {
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "it": true,
    "expect": true,
    "sinon": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "array-bracket-spacing": 2,
    "arrow-body-style": 0,
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "complexity": 0,
    "consistent-return": 1,
    "consistent-this": 0,
    "curly": [2, "multi-line"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [2, "allow-null"],
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, "both"],
    "guard-for-in": 0,
    "handle-callback-err": [2, "^(err|error|anySpecificError)$" ],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "linebreak-style": 0,
    "max-depth": 0,
    "max-len": [2, 1550, 4],
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    "newline-after-var": [0, "never"],
    "new-parens": 2,
    "no-alert": 0,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 0,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 0,
    "no-empty-character-class": 2,
    "no-labels": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 0,
    "no-extra-strict": 0,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-lone-blocks": 0,
    "no-lonely-if": 0,
    "no-loop-func": 0,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": [2, false],
    "no-multi-spaces": 2,
    "no-multi-str": 0,
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 0,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-script-url": 0,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 0,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "operator-assignment": 0,
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "prefer-const": 2,
    "quote-props": 0,
    "quotes": [2, "single", "avoid-escape"],
    "radix": 2,
    "jsx-quotes": [2, "prefer-single"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": 2,
    "semi-spacing": 0,
    "sort-vars": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": [0, "always"],
    "strict": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    "yoda": [2, "never"]
  }
}

.gitignore

# Node template

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Typescript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# IDE
.idea/*
*.iml
*.sublime-*

# OSX
.DS_Store
.vscode

# Docs Custom
.cache/
yarn-error.log

# Build
dist/




ARQUITECTURA DE COMPONENTES
- Analizar diseño

FAKE API
 INSTALACIÓN
 npm i json-server -g
 CON PERMISOS:
 sudo npm i json-server -g
 password: *****

 EJECUTAR:
 json-server initialState.json

REACT HOOKS 
Nos permite usar el estado y otras características de React sin escribir una clase.
disponible desde v: 
16.8 -Octubre 2018
}
useState 
Nos permite trabajar con el estado de un componente en React sin escribir una clase.
Es una función, el argumento que le enviamos es el estado inicial(initial state).
Retorna un array con dos elementos: 
1._ valor de nuestro estado (state),
2._ una función que nos permite actualizar ese valor(setState).

useEffect 
agrega la capacidad de realizar efectos secundarios desde un componente creado como función. Ejemplo: Llamar una API.
Función que permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
Recibe dos argumentos:
1._ Una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

2._ Un array donde especificamos qué propiedades deben cambiar para que React vuelva a llamar al primer argumento (función). Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

CustomHooks

propTypes
npm i prop-types --save -D
REACT DEV TOOLS

Añadir a Chrome

--ReactDOM.render()

 html-webpack-plugin es un paquete que utilizamos para:

 Este complemento nos permite simplificar la creación de archivos HTML y servir los bundles creados por Webpack

REACT ROUTER Y REDUX

REACT ROUTER

npm i react-router-dom --save

BrowserRouter 
se encarga de encapsular toda nuestra aplicacion 

Añadir en webpack:
  devServer:{
    historyApiFallback:true,
  },
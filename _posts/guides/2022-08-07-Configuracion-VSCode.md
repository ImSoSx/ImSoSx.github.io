---
title: Guia - Visual Studio Code
date: 2022-08-18
categories: [Guias, Software]
tags: [software, programacion, herramientas] # TAG names should always be lowercase
---

## Instalacion

---

Descargar e instalar [Visual Studio Code](https://code.visualstudio.com/)

## Configuracion

### Fuente

La fuente que utilizo la mayoria del tiempo es **Caskadia Code** de Nerdfonts.

1. Para instalarla se descarga del siguente [enlace](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/CascadiaCode.zip){:target="\_blank"}
2. Lo extraen y lo instalan seleccionando los archivos extraidos, clic derecho e instalar
3. Abrir VSCode e ir a configuracion o pulsa **CTRL + ,**
4. Luego ir a Text Editor - Font - Font Family y escribir 'CaskaydiaCove Nerd Font'
5. Finalmente en Font Size escribir 13

### Apariencia

El tema que utilizo es One Dark Pro

1. Para instalarla la puedes descargarlo [aqui](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme){:target="\_blank"} o buscandolo en el apartado extensiones de VSCode
2. Luego aparecera una seleccion de temas, seleccionar **One Dark Pro Darker**
3. Instalar - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme){:target="\_blank"} y seleccionarlo

### Otros Ajustes

Ajustes manuales al archivo de ajustes de Vscode

1. Pulsar F1 y buscar Open User Settings (JSON)
2. Agregar las siguientes lineas.

```json
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.linkedEditing": true,
  "editor.fontLigatures": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "window.menuBarVisibility": "compact",
  "workbench.startupEditor": "none",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDelete": false,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.autoSave": "onFocusChange",
  "php.suggest.basic": false,
  "security.workspace.trust.untrustedFiles": "open",
  "intelephense.diagnostics.undefinedTypes": false,
  "intelephense.diagnostics.undefinedFunctions": false,
  "intelephense.diagnostics.undefinedConstants": false,
  "intelephense.diagnostics.undefinedClassConstants": false,
  "intelephense.diagnostics.undefinedMethods": false,
  "intelephense.diagnostics.undefinedProperties": false,
  "intelephense.diagnostics.undefinedVariables": false,
  "git.autofetch": true,
  "window.zoomLevel": -1,
  "auto-close-tag.activationOnLanguage": [
    "xml",
    "php",
    "blade",
    "ejs",
    "jinja",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "plaintext",
    "markdown",
    "vue",
    "liquid",
    "erb",
    "lang-cfml",
    "cfml",
    "HTML (EEx)",
    "HTML (Eex)",
    "plist",
    "*"
  ],
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDragAndDrop": false,
  "files.associations": {
    "*.bat": "bat"
  },
  "editor.minimap.enabled": false,
```

Resumen: Guardado automatico, Quitar ligaturas de fuente, tabulacion de 2 espacios, asignacion de lenguajes a la extension **Auto-close-tag**, asignacion de formateador de codigo, formatear codigo al guardar, Zoom de ventana, ajuste de **emmet**, Ajustes de **PHP Inteliphense**

## Extensiones

Utilizo diversas extensiones para mejorar la experiencia y utilidad de VSCode, aqui la lista:

- [Advanced New File](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file){:target="\_blank"}
  : Permite crear archivos directamente desde la paleta de comandos, para utilizarlo pulsa **ctrl + alt + n**, selecciona el directorio donde crearas el archivo y luego el nombre del archivo con su respectiva extension.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag){:target="\_blank"}
  : Cierra automaticamente los tags.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments){:target="\_blank"}
  : Ayuda a crear comentarios por categorias, asignandoles colores diferentes para mejorar la lectura de estos.
- [Bootstrap 5 Quick Snippets](https://marketplace.visualstudio.com/items?itemName=AnbuselvanRocky.bootstrap5-vscode){:target="\_blank"}
  : Permite el uso de Snippets de Bootstrap 5
- [Comment Divider](https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider){:target="\_blank"}
  : Provee comandos para generar comentarios separadores de codigo
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek){:target="\_blank"}
  : Permite ir o dar un vistaso rapido al estilo css asignado.
- [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django){:target="\_blank"}
  : Añade soporte para Django
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv){:target="\_blank"}
  : Permite el destacado de sintaxis en archivos .env
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){:target="\_blank"}
  : Integra ESLint a VSCode
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github){:target="\_blank"}
  : Permite revisar y administrar las pull request y problemas desde VSCode
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens){:target="\_blank"}
  : Permite una mayor integracion con el controlador de versiones, agregando multiples caracteristicas
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag){:target="\_blank"}
  : Destaca los tag seleccionados
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css){:target="\_blank"}
  : Permite autocompletado de css en documentos HTML
- [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview){:target="\_blank"}
  : Muestra una previsualizacion de la imagen al situarse encima del enlace.
- [Inline Fold](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold){:target="\_blank"}
  : Oculta los nombres de las clases para una mejor lectura de codigo
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets){:target="\_blank"}
  : Agrega fragmentos de codigo para javascript en ES6
- [Laravel Artisan](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan){:target="\_blank"}
  : Permite ejecutar comandos de artisan directamente de la paleta de comandos
- [Laravel Blade Formatter](https://marketplace.visualstudio.com/items?itemName=shufo.vscode-blade-formatter){:target="\_blank"}
  : Permite dar formato a documentos Blade
- [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade){:target="\_blank"}
  : Resaltado de codigo y fragmentos de codigo de Blade
- [Laravel Blade Spacer](https://marketplace.visualstudio.com/items?itemName=austenc.laravel-blade-spacer){:target="\_blank"}
  : Agrega espacios automaticamente en las llaves de las vistas Blade
- [Laravel Blade Wrapper](https://marketplace.visualstudio.com/items?itemName=IHunte.laravel-blade-wrapper){:target="\_blank"}
  : Permite implementar directivas blade en codigo ya escrito
- [Laravel Create View](https://marketplace.visualstudio.com/items?itemName=glitchbl.laravel-create-view){:target="\_blank"}
  : Permite crear vistas desde la paleta de comandos
- [Laravel Extra Intellisense](https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense){:target="\_blank"}
  : Provee autocompletado de vistas y rutas de Laravel
- [Laravel Goto](https://marketplace.visualstudio.com/items?itemName=absszero.vscode-laravel-goto){:target="\_blank"}
  : Permite navegar por los archivos de laravel al pasaar el mouse sobre el componente
- [Laravel Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel5-snippets){:target="\_blank"}
  : Agrega snippets de laravel
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer){:target="\_blank"}
  : Crea un servidor local para el desarrollo de paginas estaticas o dinamicas, permite recarga automatica
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare){:target="\_blank"}
  : Herramienta para realizar colaboraciones
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx){:target="\_blank"}
  : Agrega soporte a MarkdownX
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense){:target="\_blank"}
  : Agrega autocompletado para archivos
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock){:target="\_blank"}
  : Cambia el color del marco de vscode por instancias, util cuando se tienen multiples instancias de vscode al mismo tiempo
- [PHP DocBLocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker){:target="\_blank"}
  : Añade soporte a bloques de documentacion en formato PHP
- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client){:target="\_blank"}
  : Agrega multiples utilidades para mejorar el desarrollo con PHP
- [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell){:target="\_blank"}
  : Añade soporte a Powershell
- [Prettier - Code Formater](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode){:target="\_blank"}
  : Herramienta para dar formato al codigo
- [vscode goto documentation](https://marketplace.visualstudio.com/items?itemName=cxfksword.goto-documentation){:target="\_blank"}
  : Permite seleccionar y buscar la documentacion del codigo seleccionado

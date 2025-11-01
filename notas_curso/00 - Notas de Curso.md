# Electron for Desktop Apps: The Complete Developer's Guide

### 1. How to Get Help

### 2. Course Resources

### 3. Join Our Community!

### 4. Why Does Electron Exist?

### 5. How Does Electron Work?

- Funciona de forma semelhante ao Google Chrome
- Existe o Browser process e o child process
- O chrome app abre um ou mais renderer process que abre uma webpage
- A main window e os renderer process são independentes. Se comunicam via Inter process Communication

### 6. History of Electron

### 7. App Overview

### 8. Getting Started

npm init

### 9. Starting and Stopping Electron

- cria o app.on
- altera o scripts do package.json
- roda e fecha a aplicação

| codigo                     | descricao                              |
| -------------------------- | -------------------------------------- |
| app.on( evento , callback) | Escuta eventos do ciclo de vida do app |

### 10. Clarification on Toggling Developer Tools

### 11. Loading HTML Docs

- cria uma browser window
- Faz ela carregar um arquivo html
- browserWindow : Classe para criar janelas nativas

### 12. Selecting Videos

- continua e cria formulario para carregar um arquivo html

### 13. Sample Video - Download Me!

### 14. Reading File Details

- acrescenta um botao ao form
- cria um listener para o evento de submit
- acrescenta um breakpoint
- mostra o objeto files do input via ferramenta de desenvolvedor
- mostra via console de aplicativo como obter algumas informações do arquivo sendo carregado

### 15. Introduction to FFMPEG

- mostra o que é o ffmpeg
- instala o ffmpeg
- ffmpeg é uma biblioteca que ajuda a trabalha com audio e video.
- essa biblioteca é usada pela bliblioteca node fluent-ffmpeg

### 16. OSX FFMPEG Installation

### 17. Windows FFMPEG Setup

- Documento para instalar o ffmpeg no windows
- foi instalado com `winget install "FFmpeg"`
- Depois da instalação fica diponivel 3 comando incluindo

sainda de instalacao

```powershell
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> npm run electron

> videoinfo@1.0.0 electron
> electron .


[9220:1031/165652.847:ERROR:CONSOLE:1] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[9220:1031/165652.847:ERROR:CONSOLE:1] "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> npm run electron

> videoinfo@1.0.0 electron
> electron .


[10100:1031/170514.575:ERROR:CONSOLE:1] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[10100:1031/170514.575:ERROR:CONSOLE:1] "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> npm run electron

> videoinfo@1.0.0 electron
> electron .


[19800:1031/170700.193:ERROR:CONSOLE:1] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[19800:1031/170700.193:ERROR:CONSOLE:1] "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> npm run electron

> videoinfo@1.0.0 electron
> electron .


PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> npm run electron

> videoinfo@1.0.0 electron
> electron .


[12640:1031/170849.576:ERROR:CONSOLE:1] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[12640:1031/170849.576:ERROR:CONSOLE:1] "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> winget
Gerenciador de Pacotes do Windows v1.11.510
Copyright (c) Microsoft Corporation. Todos os direitos reservados.

O programa utilitário de linha de comando winget permite instalar aplicativos e outros pacotes a partir da linha de comando.

uso: winget  [<comando>] [<opções>]

Os seguintes comandos estão disponíveis:
  install    Instalar um determinado pacote
  show       Mostra informações sobre um pacote
  source     Gerenciar fontes de pacotes
  search     Localizar e mostrar informações básicas de pacotes
  list       Exibir os pacotes instalados
  upgrade    Mostra e executa atualizações disponíveis
  uninstall  Desinstala um determinado pacote
  hash       Ajuda para arquivos do instalador de hash
  validate   Valida um arquivo de manifesto
  settings   Abra as configurações ou defina as configurações do administrador
  features   Mostra o status dos recursos experimentais
  export     Exporta uma lista dos pacotes instalados
  import     Instala todos os pacotes em um arquivo
  pin        Gerenciar pinos de pacote
  configure  Configura o sistema em um estado desejado
  download   Baixa o instalador de um determinado pacote
  repair     Repara o pacote selecionado
  dscv3      Comandos de recurso DSC v3

Para obter mais detalhes sobre um comando específico, passe o argumento help. [-?]

As seguintes opções estão disponíveis:
  -v,--version                Exibir a versão da ferramenta
  --info                      Exibir informações gerais da ferramenta
  -?,--help                   Mostra a ajuda sobre o comando selecionado
  --wait                      Solicita que o usuário pressione qualquer tecla antes de sair
  --logs,--open-logs          Abrir o local padrão dos logs
  --verbose,--verbose-logs    Habilita o registro em log detalhado para winget
  --nowarn,--ignore-warnings  Suprime saídas de aviso
  --disable-interactivity     Desabilitar os prompts interativos
  --proxy                     Definir um proxy a ser usado para esta execução
  --no-proxy                  Desabilitar o uso de proxy para esta execução

Mais tópicos de ajuda podem ser encontrados em: https://aka.ms/winget-command-help
PS C:\Users\josue\OneDrive\Documents\Josue\videoinfo> winget install "FFmpeg"
A fonte 'msstore' requer que você exiba os seguintes contratos antes de usar.
Terms of Transaction: https://aka.ms/microsoft-store-terms-of-transaction
A origem requer que a região geográfica de duas letras do computador atual seja enviada ao serviço de back-end para funcionar corretamente (por exemplo, "EUA").

Você concorda com todos os termos dos contratos de origem?
[Y] Sim  [N] Não: Y
Encontrado FFmpeg [Gyan.FFmpeg] Versão 8.0
Este aplicativo é licenciado para você pelo proprietário.
A Microsoft não é responsável por, nem concede licenças a pacotes de terceiros.
Baixando https://github.com/GyanD/codexffmpeg/releases/download/8.0/ffmpeg-8.0-full_build.zip
  ██████████████████████████████   210 MB /  210 MB
Hash do instalador verificado com êxito
Extraindo arquivo...
Arquivo extraído com êxito
Iniciando a instalação do pacote...
Variável de ambiente do caminho modificada; reinicie seu shell para usar o novo valor.
O alias da linha de comando foi adicionado: "ffmpeg"
O alias da linha de comando foi adicionado: "ffplay"
O alias da linha de comando foi adicionado: "ffprobe"
Instalado com êxito
```

### 18. Important BrowserWindow Update

- uma configuração que precisa ser feita para o mainWindow funcionar

### 19. Require Statements in the Browser

- Define onde vai ficar a lógica de analise do tempo do video (no electron app - index.js)
- Usando electron o html tem acesso a require assim como no javascript
- alem disso tem acesso tambem a outros módulo node tais como o fs

### 20. Required Destructuring Update

```html
<script>
  const electron = require('electron')
  const{ipcRenderer, webUtils} = electron
```

acesso ao arquivo fica

```js
const file = document.querySelector("input").files[0];
const file = webUtils.getPathForFile(file);
```

### 21. IPC Communication

- Explica a logica de envio do WebApp ao ElectronApp
- o WebAPP(index.html) roda `ipcRenderer.send('mensagem',dado)`
- o ElectronApp(index.js) roda `ipcMain.on('mensagem',()=>{})`

### 22. Video Duration with FFProbe

- modifica o ipcMain.on do index.js usando FFProbe para pegar a duração do video
- joga a informação na console
- foi necessario instalar o fluent-ffmpeg `npm install fluent-ffmpeg`

23. Receiving IPC Events
24. Wrapup
25. Updating Your Project for Best Security Practices
26. App Overview
27. App Boilerplate
28. Important BrowserWindow Update
29. Creating the MainWindow
30. Constructing Menu Bars
31. Menu Bar Gotchas
32. Darwin Conditional Required Update
33. On Menu Click Functionality
34. Cross Platform Hotkeys
35. Creating Separate Windows
36. Another Electron Gotcha
37. Adding Polish to Electron
38. Restoring Developer Tools
39. IPC Between Windows
40. Required Update for Closing a Window
41. Garbage Collection with Electron
42. Role Shortcuts
43. Your Turn - Clearing Lists
44. Solution and Wrapup
45. Updating Your Project for Best Security Practices
46. App Boilerplate
47. Starter Project Files
48. What's This React Code?
49. BrowserWindow vs Tray
50. Important BrowserWindow Update
51. BrowserWindow Config
52. Small Update for Tray Icon
53. Creating Tray Icons
54. Toggling BrowserWindow Visibility
55. Detecting Visibility
56. The Positioning Bounds System
57. Setting Position with Bounds
58. Positioning of Windows
59. Object Oriented Programming with Electron
60. Basics of ES6 Classes
61. Subclassing
62. The TimerTray Subclass
63. Update to Arrow Functions
64. Finishing TimerTray Refactor
65. Setting Tooltips
66. More on Garbage Collection
67. More Refactoring to Arrow Functions
68. Building Context Menus
69. Controlling Window Focus
70. Hiding Dock Icons
71. MainWindow Class
72. IPC Between React and Electron
73. Displaying Text on the Tray
74. Background Throttling
75. App Overview
76. Starter Project Files
77. App Challenges
78. Important BrowserWindow Update
79. BrowserWindow Creation
80. Starting up Electron with Webpack
81. Overview of React and Redux
82. Receiving a List of Videos
83. Video Metadata
84. Handling Async Bulk Operations with Promises
85. Fetching Metadata in Promises
86. Refactoring for Multiple Videos
87. Wrapup on Metadata
88. Required Update for the convertVideos Action Creator
89. Output Paths
90. Batch Video Conversion
91. Handling Conversion Completion
92. Detecting Conversion Progress
93. Opening Folders with Shell
94. Wrapup

# Gerador de QR Code via Firebase Functions
Este projeto demonstra como criar uma API serverless utilizando Firebase Cloud Functions com Node.js + TypeScript, que gera um QR Code e retorna a imagem em formato Base64.
Você pode utilizar este código para implementar no seu projeto um sistema de qrcode ou criar um novo projeto apartir desse.

🚀 Funcionalidades

    Geração de QR Code a partir de um texto, link ou token.

    Página HTML que consome a API e exibe o QR Code.

    Pronto para deploy ou rodar localmente.

⚙️ Como configurar o projeto  
1 - Clone o repositório  
git clone https://github.com/AmericaTheKachan/Gerador-QR-CODE.git  
cd seu-repositorio  

2 - Instale as dependências  
Entre na pasta das functions:  
cd functions
npm install

3 - Configure o conteúdo do QR Code  
Abra o arquivo:  
functions/src/index.ts  

Encontre esse trecho:  
"const token = "qrcode-content";"  

Altere o conteúdo do token para o texto, link ou dado que você deseja inserir no QR Code.  

Por exemplo:
"const token = "https://meusite.com/login";"

4 - Insira o url da sua firebase function  
Abra o arquivo:  
functions/public/index.html

Encontre esse trecho:
"const url = "your-function-url";"

Insira o url da sua firebase function. (Caso ainda não tenha o URL, faça o passo 5 e copie a URL no terminal ou dentro do site do firebase)

5 - Rodando o código  
Acesse a pasta functions e abra o terminal  
Digite os seguintes comandos:  
npm run build  
firebase deploy --only functions:getSessionToken (Este comando da deploy apenas na função getSessionToken, para dar deploy em todas funções use: firebase deploy --only functions)  

Basta acessar o arquivo HTML localmente ou com liveserver/livepreview.  

🔧 Tecnologias utilizadas

    🔥 Firebase Functions (Serverless)

    ⚙️ Node.js + TypeScript

    🎨 HTML + JavaScript Vanilla

    🏗️ Biblioteca QRCode (qrcode)

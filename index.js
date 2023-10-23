<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>aMathyzin</title>
  <link rel="icon" href="https://media.discordapp.net/attachments/1119715186073411705/1134190559947407481/channels4_profile2.png" type="image/x-icon">
  <meta property="og:title" content="aMathyzin - Central">
  <meta property="og:description" content="Site principal do canal aMathyzin">
  <meta property="og:image" content="https://media.discordapp.net/attachments/1119715186073411705/1134190559947407481/channels4_profile2.png">
  <meta property="og:url" content="https://amathyzin.tech">
  <meta property="og:type" content="website">
  <style>
    .icon {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 5px;
      border-radius: 50%;
    }

    .icon-link:hover .icon {
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.6);
    }

    .knifebay-img {
      width: 100px;
      height: auto;
    }

    .navbar {
      background-color: #000000;
      color: #ffffff;
      padding: 10px;
      display: flex;
      justify-content: space between;
      align-items: center;
    }

    .navbar .left {
      display: flex;
      align-items: center;
    }

    .navbar .left .logo {
      font-weight: bold;
    }

    .navbar .left .logo .icon {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 5px;
    }

    .navbar .right {
      display: flex;
      align-items: center;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(45deg, purple, black, #740AFB);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    h1, p {
      margin: 10px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }

    /* Estilização do vídeo */
    iframe {
      width: 560px;
      height: 315px;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto; /* Centraliza o vídeo horizontalmente */
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    /* Estilos para a tela de carregamento */
    #loading-container {
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
    }

    #loading-spinner {
      font-size: 24px;
      animation: spin 2s infinite; /* Adiciona a animação de rotação */
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  <script>
    const socket = io();

    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.IO');
      
      // Remover a tela de carregamento após alguns segundos (3000ms = 3 segundos)
      setTimeout(() => {
        const loadingContainer = document.getElementById('loading-container');
        loadingContainer.style.display = 'none';
      }, 3000);
    });

    socket.on('update', (data) => {
      const pingElement = document.getElementById('ping');
      const uptimeElement = document.getElementById('uptime');
      const infoElement = document.getElementById('info');
      const inviteLinkElement = document.getElementById('invite-link');
      const youtubeLinkElement = document.getElementById('youtube-link');
      const knifeBayElement = document.getElementById('knifebay-link');

      pingElement.innerText = `Ping: ${data.ping} ms`;
      uptimeElement.innerText = `Uptime: ${data.uptime}`;
      infoElement.innerText = "Este site será atualizado assim que eu concertar meu pc, e será um painel administrativo com o bot aMathyzin - escrito por aMathyzin.";
      infoElement.style.fontWeight = "bold"; // Adiciona a propriedade fontWeight com valor "bold"

      inviteLinkElement.innerHTML = `
        <a href="https://discord.gg/UE2DcGe5" target="_blank">
          <img class="icon" src="https://media.discordapp.net/attachments/1119715186073411705/1122872863704219710/discord.png" alt="Discord">
          Discord
        </a>
      `;

      youtubeLinkElement.innerHTML = `
        <a href="https://www.youtube.com/@aMathyzin" target="_blank">
          <img class="icon" src="https://cdn.discordapp.com/attachments/1119715186073411705/1122872840614580344/youtube.png" alt="YouTube">
          YouTube
        </a>
      `;
      
      knifeBayElement.innerHTML = `
        <a href="https://knifebay.lojavirtualnuvem.com.br/" target="_blank">
          <img class="icon knifebay-img" src="https://media.discordapp.net/attachments/1119715186073411705/1122878604007714816/knifeBay.png" alt="KnifeBay">
        </a>
      `;
    });
  </script>
</head>
<body>
  <!-- Tela de carregamento -->
  <div id="loading-container">
    <div id="loading-spinner">Carregando...</div>
  </div>
  
  <div class="navbar">
    <div class="left">
      <span class="logo">
        <img class="icon" src="https://cdn.discordapp.com/attachments/841874572118327326/1125115918486355968/channels4_profile.jpg" alt="aMathyzin">
        aMathyzin
      </span>
    </div>
    <div class="right">
      <a href="https://www.youtube.com/@aMathyzin" target="_blank" class="icon-link">
        <img class="icon" src="https://cdn.discordapp.com/attachments/1119715186073411705/1122872840614580344/youtube.png" alt="YouTube">
      </a>
      <a href="https://discord.gg/kNxXJZeA" target="_blank" class="icon-link">
        <img class="icon" src="https://media.discordapp.net/attachments/1119715186073411705/1122872863704219710/discord.png" alt="Discord">
      </a>
      <a href="https://knifebay.lojavirtualnuvem.com.br/" target="_blank" class="icon-link">
        <img class="icon knifebay-img" src="https://media.discordapp.net/attachments/1119715186073411705/1122878604007714816/knifeBay.png" alt="KnifeBay">
      </a>
      <!-- Aba "Downloads" com link para a página de downloads -->
      <a href="/downloads" class="icon-link">
        <img class="icon" src="https://media.discordapp.net/attachments/1119715186073411705/1165499978081374308/189249.png?ex=65471370&is=65349e70&hm=f0b642ae858d731047f0944a&=&width=409&height=409" alt="Downloads">
        Downloads
      </a>
    </div>
  </div>
  <!-- Vídeo do YouTube incorporado -->
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0J4nhSur9DI" frameborder="0" allowfullscreen></iframe>
</body>
</html>

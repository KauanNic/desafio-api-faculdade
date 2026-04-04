O que mudou no projeto?
1. PWA (Progressive Web App)

O site agora pode ser instalado no celular como se fosse um aplicativo nativo.

Adicionei o manifest.json para configurar ícones e cores.

Implementei um Service Worker para garantir que o app abra mesmo se o usuário estiver sem internet (modo offline).

2. Recursos de Hardware

Integrei o site diretamente com as funções do aparelho:

Vibração: Ao clicar em qualquer card de bruxo, o celular emite um feedback tátil (vibração curta).

Compartilhamento: Adicionei um botão "Compartilhar" que aciona o menu nativo do sistema (Android/iOS) para enviar o link do personagem.

3. Melhorias de UI e Lighthouse

Foquei em deixar o site mais profissional e rápido:

Barra de busca: Agora é possível filtrar os 50 personagens em tempo real.

Métricas do Lighthouse: Otimizei as tags de SEO, contraste de cores e acessibilidade para alcançar notas altas no teste de qualidade do Google.

Design: Ajustei o visual dos cards e do cabeçalho para priorizar a experiência mobile.

🛠️ Tecnologias Utilizadas
HTML5, CSS3 e JavaScript (Vanilla)

API de Vibração e Web Share API

Service Workers e Cache Storage

🔗 Links do Projeto
Repositório: https://github.com/KauanNic/desafio-api-faculdade

Site (Deploy): https://kauannic.github.io/desafio-api-faculdade/
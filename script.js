async function buscarPersonagens() {
    // 1. O novo endereço da API de Harry Potter
    const url = 'https://hp-api.onrender.com/api/characters';
    
    try {
        const resposta = await fetch(url);
        const personagens = await resposta.json();
        const carregando = document.getElementById('loading');
if (carregando) { carregando.style.display = 'none'; }

        // Selecionamos o nosso container no HTML
        const container = document.getElementById('lista-api');
        container.innerHTML = ''; // Limpa o "Carregando..."

        // 2. Vamos pegar apenas os primeiros 20 personagens para não travar o celular
        const primeirosVinte = personagens.slice(0, 20);

        primeirosVinte.forEach(bruxo => {
            // 3. Verificamos se o bruxo tem uma imagem. 
            // Se não tiver, usamos uma imagem padrão (um placeholder).
            const foto = bruxo.image ? bruxo.image : 'https://via.placeholder.com/150?text=Sem+Foto';

            // 4. Criamos o "Card" do personagem
            const card = document.createElement('div');
            card.classList.add('bruxo-card');

            card.innerHTML = `
                <img src="${foto}" alt="${bruxo.name}">
                <div class="info">
                    <h3>${bruxo.name}</h3>
                    <p><strong>Casa:</strong> ${bruxo.house || 'Não informada'}</p>
                    <p><strong>Ator:</strong> ${bruxo.actor}</p>
                </div>
            `;
            card.onclick = () => {
    // Aqui você escolhe para onde o usuário vai. 
    // Vamos mandar para uma busca no Google com o nome do personagem:
    const nomeBusca = encodeURIComponent(bruxo.name);
    window.open(`https://www.google.com/search?q=Harry+Potter+${nomeBusca}`, '_blank');
};

            container.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar bruxos:", erro);
        document.getElementById('loading').innerText = "Erro ao carregar o mundo mágico.";
    }
}

// Inicia a busca
buscarPersonagens();
async function buscarPersonagens() {
    const url = 'https://hp-api.onrender.com/api/characters';
    
    try {
        const resposta = await fetch(url);
        const personagens = await resposta.json();
        const container = document.getElementById('lista-api');
        
        document.getElementById('loading').style.display = 'none';

        const comFoto = personagens.filter(bruxo => bruxo.image !== "");
        const listaFinal = comFoto.slice(0, 50);

        listaFinal.forEach(bruxo => {
            const card = document.createElement('div');
            card.classList.add('bruxo-card');

            card.innerHTML = `
                <img src="${bruxo.image}" alt="${bruxo.name}">
                <div class="info">
                    <h3>${bruxo.name}</h3>
                    <p>Casa: ${bruxo.house || 'Não informada'}</p>
                    <p>Ator: ${bruxo.actor}</p>
                </div>
            `;

            card.onclick = () => {
                const nomeBusca = encodeURIComponent(bruxo.name);
                window.open(`https://www.google.com/search?q=Harry+Potter+${nomeBusca}`, '_blank');
            };

            container.appendChild(card);
        });

    } catch (erro) {
        console.error(erro);
        document.getElementById('loading').innerText = "Erro ao carregar dados.";
    }
}

buscarPersonagens();    
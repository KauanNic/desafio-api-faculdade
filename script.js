let personagensFiltrados = [];

async function buscarPersonagens() {
    try {
        const resposta = await fetch('https://hp-api.onrender.com/api/characters');
        const dados = await resposta.json();
        
        personagensFiltrados = dados.filter(p => p.image !== "").slice(0, 40);
        exibirCards(personagensFiltrados);
        
        document.getElementById('loading').style.display = 'none';
    } catch (erro) {
        console.error(erro);
    }
}

function exibirCards(lista) {
    const container = document.getElementById('lista-api');
    container.innerHTML = lista.map(bruxo => `
        <div class="bruxo-card" onclick="interagir('${bruxo.name}')">
            <img src="${bruxo.image}" alt="${bruxo.name}" loading="lazy">
            <div class="info">
                <h3>${bruxo.name}</h3>
                <p>Casa: ${bruxo.house || 'N/A'}</p>
                <button class="btn-share" onclick="compartilhar(event, '${bruxo.name}')">Compartilhar</button>
            </div>
        </div>
    `).join('');
}

function interagir(nome) {
    if (navigator.vibrate) navigator.vibrate(50); // HARDWARE: Vibração
    window.open(`https://www.google.com/search?q=Harry+Potter+${nome}`, '_blank');
}

// HARDWARE: Web Share API
function compartilhar(event, nome) {
    event.stopPropagation();
    if (navigator.share) {
        navigator.share({ title: nome, text: `Olha esse bruxo: ${nome}`, url: window.location.href });
    }
}

document.getElementById('busca').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const busca = personagensFiltrados.filter(p => p.name.toLowerCase().includes(termo));
    exibirCards(busca);
});

buscarPersonagens();
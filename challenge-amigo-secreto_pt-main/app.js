let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();
    
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nomeAmigo);
    amigoInput.value = ''; // Limpa o campo de input

    renderizarListaAmigos();
}

function renderizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de renderizar novamente
    
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Você precisa adicionar pelo menos 1 amigo para sortear!");
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteia um nome aleatório da lista de amigos
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado na página
    let li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${nomeSorteado}`;
    resultado.appendChild(li);
}

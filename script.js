function abrirAba(evt, categoria) {
    // Pega todos os elementos com a classe "tab-content" e os esconde
    let conteudos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
    }

    // Pega todos os botões das abas e remove a classe "active"
    let botoes = document.getElementsByClassName("tab-link");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].className = botoes[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona a classe "active" ao botão que abriu a aba
    document.getElementById(categoria).style.display = "block";
    evt.currentTarget.className += " active";
}
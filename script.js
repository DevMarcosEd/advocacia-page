// Função para manipular a exibição do menu móvel
function menuShow() {
    // Seleciona o elemento com a classe "menu-mobile"
    let menuMobile = document.querySelector(".menu-mobile");

    // Verifica se a classe "open" está presente no elemento
    if (menuMobile.classList.contains('open')) {
        // Se estiver presente, remove a classe "open" (fecha o menu)
        menuMobile.classList.remove('open');
    } else {
        // Se a classe "open" não estiver presente, adiciona a classe "open" (abre o menu)
        menuMobile.classList.add('open');
    }
}

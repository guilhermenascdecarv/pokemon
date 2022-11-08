function abrirMenu () {
    const menuMobile = document.querySelector('.div_menu_mobile')

    if (menuMobile.classList.contains('aberto')) {
        menuMobile.classList.remove('aberto')
    } else {
        menuMobile.classList.add('aberto')
    }
}
let HamMenu = document.querySelector('.hamMenuWrapper');
let HamMenuClose = document.querySelector('.hamburger-close-wrapper');
let Menu = document.querySelector('.navItems');

HamMenu.addEventListener('click', (e) => {
    console.log(e);
    HamMenuClose.classList.remove('hidden');
    Menu.style.display = 'flex';
    // Menu.classList.add('flex');
})
HamMenuClose.addEventListener('click', (e) => {
    console.log(e);
    Menu.style.display = 'none';
    // Menu.classList.add('hidden');
    HamMenuClose.classList.add('hidden');
    // Menu.classList.remove('flex');
})
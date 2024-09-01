
const menuButton = document.querySelector('#menu');
    const menuContent = document.querySelector('.menu-content');

    menuButton.addEventListener('click', () => {
    menuContent.style.display = menuContent.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = 'none';
    }
    });


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



// text area popup

const textarea = document.querySelector('textarea');
  
textarea.addEventListener('focus', function() {
    if (window.innerWidth <= 768) {
    textarea.style.height = '60vh';
    textarea.style.width = '90vh';
    textarea.style.background = 'var(--background-baige)';
    textarea.style.fontSize = '28px';
    textarea.style.color = 'black';
    }
});
  
textarea.addEventListener('blur', function() {
    textarea.style.height = '';
    textarea.style.width = '90%';
    textarea.style.background = 'none';
    textarea.style.color = 'white';


});

// document.addEventListener('click', (event) => {
//     if (!textarea.contains(event.target)) {
//         textarea.style.height = 'reset';
//         textarea.style.width = '90%';
//     }
// });




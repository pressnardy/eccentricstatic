
const menuButton = document.querySelector('#menu');
const menuContent = document.querySelector('.menu-content');
// const menuSection = document.querySelector('#menu-contect-section');

menuButton.addEventListener('click', () => {
menuContent.style.display = menuContent.style.display === 'none' ? '' : 'none';

// menuSection.style.display = menuContent.style.display === 'none' ? 'block' : 'none';
    
});

    

document.addEventListener('click', (event) => {
if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
    menuContent.style.display = 'none';
    // menuSection.style.display = 'none';
}
});



// text area popup

const textarea = document.querySelector('textarea');
  
textarea.addEventListener('click', function() {
    if (window.innerWidth <= 400) {
        textarea.style.height = '60vh';
        textarea.style.width = '80vh';
        textarea.style.background = 'var(--background-baige)';
        textarea.style.fontSize = '40px';
        textarea.style.color = 'black';
    
    }
});
  
document.addEventListener('click', (event) => {
    if (!textarea.contains(event.target) && !textarea.contains(event.target)) {
        textarea.style.height = '';
        textarea.style.width = '';
        textarea.style.background = 'none';
        textarea.style.color = 'white';
    }
    });


(function() {
    emailjs.init("Yiw6AivJA4G9RMIvo"); // Replace with your EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ix20qjb', 'template_ktsfry6', this)
        .then(function() {
            alert('SUCCESS!');
        }, function(error) {
            alert('FAILED...', error);
        });
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ix20qjb', 'template_sv55gz2', this)
        .then(function() {
            alert('SUCCESS!');
        }, function(error) {
            alert('FAILED...', error);
        });
});







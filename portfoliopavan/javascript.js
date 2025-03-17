let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href='#${id}']`).classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Initialize ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const closeBtns = document.querySelectorAll('.modal .close');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.style.display = "none";
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
   


    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            number: document.getElementById('number').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Email.send({
        //     Host : "s1.maildns.net",
        //     Username : "kadavathpavan12345@gmail.com",
        //     Password : "DDF812A42C5BD99F1A09FFBFCED60970E8FF",
        //     To : 'them@website.com',
        //     From : "kadavathpavan12345@gmail.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        // }).then(
        //   message => alert(message)
        // );

        emailjs.send('service_39yekxp', 'template_9fntb5s', formData).then(
            (response) => {
            //   console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
        // console.log('Form Data:', formData);
        form.reset();
        alert(' Message sent successfully.');
    });

    
});

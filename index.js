let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Games Carousel - duplikacja slajdów dla płynnej animacji
const gamesCarousel = document.querySelector('.games-carousel');
const gameSlides = document.querySelectorAll('.game-slide');

// Duplikujemy wszystkie slajdy
gameSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    gamesCarousel.appendChild(clone);
});

// Like Button
let likes = 0;
let hasLiked = false;

function toggleLike() {
    const btn = document.getElementById('likeBtn');
    const heart = document.getElementById('heartIcon');
    const text = document.getElementById('likeText');
    const count = document.getElementById('likeCount');
    
    if (!hasLiked) {
        hasLiked = true;
        likes++;
        heart.textContent = '❤️';
        text.textContent = 'Polubiłeś!';
        btn.classList.add('liked');
    } else {
        hasLiked = false;
        likes--;
        heart.textContent = '🤍';
        text.textContent = 'Polub nas!';
        btn.classList.remove('liked');
    }
    count.textContent = `(${likes})`;
}

// Contact Form
function sendEmail(e) {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    const message = document.getElementById('message').value;
    const email = 'mikolajwolfinger@gmail.com';
    const subject = 'Wiadomość z formularza - Klub D&D';
    const body = `Nadawca: ${name}%0D%0A%0D%0AWiadomość:%0D%0A${message}`;
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    document.getElementById('senderName').value = '';
    document.getElementById('message').value = '';
}

// Smooth scroll helper
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    
    index += step;
    
    // Aseguramos que el índice se mantenga dentro del rango de las imágenes
    if (index >= totalSlides) {
        index = 0; // Si llega al final, vuelve al inicio
    }
    if (index < 0) {
        index = totalSlides - 1; // Si está al principio, vuelve al final
    }
    
    // Mueve el contenedor de imágenes para mostrar la imagen correspondiente
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

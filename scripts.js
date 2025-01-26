// Función para desplazarse a una sección específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Funcionalidad del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * slides[0].clientWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

setInterval(() => showSlide(currentSlide + 1), 3000); // Cambiar cada 3 segundos

// Añadir contribuciones
function addContribution() {
    const userPhrase = document.getElementById('userPhrase').value;
    if (userPhrase.trim() !== "") {
        const galleryList = document.getElementById('galleryList');
        const newContribution = document.createElement('li');
        newContribution.textContent = userPhrase;
        galleryList.appendChild(newContribution);
        document.getElementById('userPhrase').value = "";
    } else {
        alert('Por favor, escribe una frase antes de enviar.');
    }
}

// Inicializar el mapa
const map = L.map('worldMap').setView([20, 0], 2); // Coordenadas iniciales (lat, lng) y nivel de zoom

// Añadir capa de mapas (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lista de marcadores con enlaces
const markers = [
    { lat: 33.6844, lng: 73.0479, text: 'Malala Yousafzai - Defensora de la educación (Pakistán)', link: 'https://en.wikipedia.org/wiki/Malala_Yousafzai' },
    { lat: 19.4326, lng: -99.1332, text: 'Frida Kahlo - Icono del arte y autoexpresión (México)', link: 'https://en.wikipedia.org/wiki/Frida_Kahlo' },
    { lat: 51.5074, lng: -0.1278, text: 'Ada Lovelace - Primera programadora de la historia (Reino Unido)', link: 'https://en.wikipedia.org/wiki/Ada_Lovelace' },
    { lat: 40.7128, lng: -74.0060, text: 'Eleanor Roosevelt - Defensora de los derechos humanos (EE.UU.)', link: 'https://en.wikipedia.org/wiki/Eleanor_Roosevelt' },
    { lat: -33.8688, lng: 151.2093, text: 'Edith Cowan - Primera mujer en el parlamento australiano (Australia)', link: 'https://en.wikipedia.org/wiki/Edith_Cowan' },
    { lat: 48.8566, lng: 2.3522, text: 'Marie Curie - Pionera en radiactividad y física (Francia)', link: 'https://en.wikipedia.org/wiki/Marie_Curie' },
    { lat: 35.6895, lng: 139.6917, text: 'Yayoi Kusama - Artista contemporánea (Japón)', link: 'https://en.wikipedia.org/wiki/Yayoi_Kusama' },
    { lat: 55.7558, lng: 37.6173, text: 'Valentina Tereshkova - Primera mujer en el espacio (Rusia)', link: 'https://en.wikipedia.org/wiki/Valentina_Tereshkova' },
    { lat: -22.9068, lng: -43.1729, text: 'Maria da Penha - Activista contra la violencia de género (Brasil)', link: 'https://en.wikipedia.org/wiki/Maria_da_Penha' },
    { lat: -1.2921, lng: 36.8219, text: 'Wangari Maathai - Premio Nobel de la Paz por su trabajo ambiental (Kenia)', link: 'https://en.wikipedia.org/wiki/Wangari_Maathai' },
    { lat: 37.7749, lng: -122.4194, text: 'Rosalind Franklin - Descubridora clave en el ADN (EE.UU.)', link: 'https://en.wikipedia.org/wiki/Rosalind_Franklin' },
    { lat: 13.7563, lng: 100.5018, text: 'Chalita Banpong - Innovadora en derechos de las mujeres (Tailandia)', link: 'https://en.wikipedia.org/wiki/Thai_Women%27s_Lobby' },
    { lat: 28.6139, lng: 77.209, text: 'Kalpana Chawla - Astronauta y heroína espacial (India)', link: 'https://en.wikipedia.org/wiki/Kalpana_Chawla' },
    { lat: -34.6037, lng: -58.3816, text: 'Eva Perón - Defensora de los derechos sociales (Argentina)', link: 'https://en.wikipedia.org/wiki/Eva_Per%C3%B3n' },
    { lat: 60.1699, lng: 24.9384, text: 'Tarja Halonen - Primera presidenta de Finlandia (Finlandia)', link: 'https://en.wikipedia.org/wiki/Tarja_Halonen' },
    { lat: 41.9028, lng: 12.4964, text: 'Rita Levi-Montalcini - Neurocientífica y premio Nobel (Italia)', link: 'https://en.wikipedia.org/wiki/Rita_Levi-Montalcini' },
    { lat: 39.9042, lng: 116.4074, text: 'Song Qingling - Activista social y política (China)', link: 'https://en.wikipedia.org/wiki/Soong_Ching-ling' },
    { lat: -36.8485, lng: 174.7633, text: 'Kate Sheppard - Líder del movimiento sufragista (Nueva Zelanda)', link: 'https://en.wikipedia.org/wiki/Kate_Sheppard' },
    { lat: 45.5017, lng: -73.5673, text: 'Thérèse Casgrain - Activista por el sufragio femenino (Canadá)', link: 'https://en.wikipedia.org/wiki/Th%C3%A9r%C3%A8se_Casgrain' },
    { lat: -23.5505, lng: -46.6333, text: 'Marielle Franco - Activista y defensora de los derechos humanos (Brasil)', link: 'https://en.wikipedia.org/wiki/Marielle_Franco' }
];

// Añadir marcadores al mapa con enlaces
markers.forEach(marker => {
    const popupContent = `
        <strong>${marker.text}</strong><br>
        <a href="${marker.link}" target="_blank">Leer más en Wikipedia</a>
    `;
    L.marker([marker.lat, marker.lng]).addTo(map).bindPopup(popupContent);
});

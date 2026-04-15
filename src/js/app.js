import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

// Add Google Fonts dynamically
const googleFontLink = document.createElement('link');
googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap';
googleFontLink.rel = 'stylesheet';
document.head.appendChild(googleFontLink);
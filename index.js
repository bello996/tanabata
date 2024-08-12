const photos = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];

let currentIndex = 0;
const currentPhoto = document.getElementById('current-photo');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    currentPhoto.style.opacity = 0;
    setTimeout(() => {
        currentPhoto.src = photos[currentIndex];
        currentPhoto.style.opacity = 1;
    }, 400); // 与CSS中的transition时间保持一致
});

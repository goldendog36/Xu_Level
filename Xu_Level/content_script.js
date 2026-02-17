const sizeSlider = document.getElementById('XL');
const resizableImage = document.getElementById('SX');

sizeSlider.addEventListener('input', function() {

    const newSize = sizeSlider.value;

    resizableImage.style.width = newSize + 'px';
});

resizableImage.style.width = sizeSlider.value + 'px';
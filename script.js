const hexCodeInputElement = document.querySelector('#hex-code-input');
const generateButtonElement = document.querySelector('#generate-button');
const downloadButtonElement = document.querySelector('#download-button');
const imageElement = document.querySelector('#image');
const imageContainer = document.querySelector('#image-container');
const canvas = document.querySelector('#canvas-element');
const linkElement = document.querySelector('#link');

const updateCanvas = (color = '#5865f2') => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        imageElement,
        canvas.width / 2 - image.width / 2,
        canvas.height / 2 - image.height / 2
    );
};

const updateImage = (color) => {
    imageContainer.style.backgroundColor = color;
};

// needs to add more checks for valide hex codes
const colorValidator = (color) => {
    if (color == '') return '#5865f2';
    return color;
};

// initialize canvas
const ctx = canvas.getContext('2d');
ctx.canvas.width = 1024;
ctx.canvas.height = 1024;
// draw default image
updateCanvas();

const handleGenerateButton = () => {
    const newColor = colorValidator(hexCodeInputElement.value);
    updateCanvas(newColor);
    updateImage(newColor);
};

const handleDownloadButton = () => {
    linkElement.setAttribute('download', 'photo.png');
    linkElement.setAttribute(
        'href',
        canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    );
    linkElement.click();
};

generateButtonElement.addEventListener('click', handleGenerateButton);
downloadButtonElement.addEventListener('click', handleDownloadButton);

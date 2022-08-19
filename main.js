let img = document.getElementById('img');
let file = document.getElementById('file');

let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let hueRotate = document.getElementById('hue-rotate');
let blur = document.getElementById('blur');

let download = document.getElementById('download');
let leftImg = document.querySelector('.left-img');
let upload = document.querySelector('.upload');


window.onload = () => {
    Reset.style.display = 'none';
    download.style.display = 'none';
}
function resultValue() {
    img.style.filter = 'none'
    saturate.value = '100px'
    contrast.value = '100px'
    brightness.value = '100px'
    sepia.value = '0'
    grayscale.value = '0'
    hueRotate.value = '0'
    blur.value = '0'
}
file.addEventListener('change',() => {
    resultValue()
    const reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result;
        leftImg.appendChild(img);
    }
    Reset.style.display = 'block';
    download.style.display = 'block';
    reader.readAsDataURL(file.files[0])
    upload.style.display = 'none';
})  

let timer = new Date()
console.log(timer)
let filters = document.querySelectorAll('ul li input')

filters.forEach(item => {
    item.addEventListener('input',() => {
        img.style.filter = `
          saturate(${saturate.value}%)
          contrast(${contrast.value}%)
          brightness(${brightness.value}%)
          sepia(${sepia.value}%)
          grayscale(${grayscale.value})
          hue-rotate(${hueRotate.value}deg)
          blur(${blur.value}px)
          `
    })    
})

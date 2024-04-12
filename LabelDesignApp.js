// text-input

const nameFontSize = document.getElementById("name-font-size-input");
const nameFontSizeChange = document.getElementById("displayText");

const labelFontSize = document.getElementById("labels-font-size-input");
const labelsFontSizeChange1 = document.getElementById("label1");
const labelsFontSizeChange2 = document.getElementById("label2");
const labelsFontSizeChange3 = document.getElementById("label3");
const labelsFontSizeChange4 = document.getElementById("label4");

const textInput = document.getElementById("text-input");
const displayText = document.getElementById("displayText");

const borderSize = document.getElementById("photo-border-input");
const borderChange = document.getElementById("canvas-edit");

const photoHolderSize = document.getElementById("photo-holder-size-input");
const photo = document.getElementById("canvas-edit");
const photoHolder = document.getElementById("canvas");

const leftMove = document.getElementById("element-left-move");
const rightMove = document.getElementById("element-right-move");
const upMove = document.getElementById("element-up-move");
const downMove = document.getElementById("element-down-move");
let translateX = 0;
let translateY = 0;

const leftMovePhoto = document.getElementById("photo-left-move");
const rightMovePhoto = document.getElementById("photo-right-move");
const upMovePhoto = document.getElementById("photo-up-move");
const downMovePhoto = document.getElementById("photo-down-move");
let backgroundPositionX = 0;
let backgroundPositionY = 0;

const rotACW = document.getElementById("photo-anticlockwise-rot");
const rotCW = document.getElementById("photo-clockwise-rot");
let rotationAngle = 0;


function bgImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = new FileReader();
    reader.onload = function(event) {
        var imageURL = event.target.result;
        document.getElementById("label-container").style.backgroundImage = "url('" + imageURL + "')";
    }
    reader.readAsDataURL(file);
}

function imageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = new FileReader();
    reader.onload = function(event) {
        var imageURL = event.target.result;
        document.getElementById("canvas-edit").style.backgroundImage = "url('" + imageURL + "')";
    }
    reader.readAsDataURL(file);
}

function displayName() {
    displayText.innerHTML = textInput.value;
    displayText.style.color = "blue";
    displayText.style.fontSize = "25px";
}

nameFontSize.addEventListener('input', () => {
    nameFontSizeChange.style.fontSize = `${nameFontSize.value}px`;
})

labelFontSize.addEventListener('input', () => {
    labelsFontSizeChange1.style.fontSize = `${labelFontSize.value}px`;
    labelsFontSizeChange2.style.fontSize = `${labelFontSize.value}px`;
    labelsFontSizeChange3.style.fontSize = `${labelFontSize.value}px`;
    labelsFontSizeChange4.style.fontSize = `${labelFontSize.value}px`;
    
})

borderSize.addEventListener('input', () => {
    borderChange.style.borderWidth = `${borderSize.value}px`;
})

photoHolderSize.addEventListener('input', () => {
    photoHolder.style.height = `${photoHolderSize.value}px`;
    photoHolder.style.width = `${photoHolderSize.value}px`;
    photo.style.height = `${photoHolderSize.value-10}px`;
    photo.style.width = `${photoHolderSize.value-10}px`;
})

leftMove.addEventListener('click', () => {
    const limit = -50;
    translateX -= 1;
    translateX = Math.max(translateX, limit);
    updateTransform();
})

rightMove.addEventListener('click', () => {
    let limit = 25;
    translateX += 1;
    translateX = Math.min(translateX, limit);
    updateTransform();
})

upMove.addEventListener('click', () => {
    let limit = -60
    translateY -= 1;
    translateY = Math.max(translateY, limit);
    updateTransform();
})

downMove.addEventListener('click', () => {
    let limit = 60
    translateY += 1;
    translateY = Math.min(translateY, limit);
    updateTransform();
})

function updateTransform() {
    photoHolder.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

leftMovePhoto.addEventListener('click', () => {
    backgroundPositionX -= 2;
    updateBackgroundPosition();
})

rightMovePhoto.addEventListener('click', () => {
    backgroundPositionX += 2;
    updateBackgroundPosition();
})

upMovePhoto.addEventListener('click', () => {
    backgroundPositionY -= 2;
    updateBackgroundPosition();
})

downMovePhoto.addEventListener('click', () => {
    backgroundPositionY += 2;
    updateBackgroundPosition();
})

function updateBackgroundPosition() {
    photo.style.backgroundPosition = `${backgroundPositionX}% ${backgroundPositionY}%`;
}

rotACW.addEventListener("click", () => {
    rotationAngle -= 2.5;
    updateRotationAngle();
})

rotCW.addEventListener("click", () => {
    rotationAngle += 2.5;
    updateRotationAngle();
})

function updateRotationAngle() {
    photo.style.transform = `rotate(${rotationAngle}deg)`;
}

const downloadElement = document.getElementById("label-for-download");
const downloadButton = document.getElementById("download-button-input");
downloadButton.addEventListener('click', () => {
    html2canvas(downloadElement).then(function(canvas) {
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'labelImage.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
    alert('Downloaded');
})

window.onbeforeunload = function() {
    return "Are you sure you want to refresh the page?";
};

window.onunload = function() {
    if (!confirm("Are you sure you want to leave this page?")) {
        return false;
    }
};




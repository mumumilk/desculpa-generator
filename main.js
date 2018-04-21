
window.onload = function() {
    const generateButton = document.getElementById('generate-button');
    const excuseText = document.getElementById('excuse-text');
    const excuses = excuseArray.excuses;

    writeOnTextArea(getRandomExcuse(excuses), excuseText);

    generateButton.onclick = function() {
        writeOnTextArea(getRandomExcuse(excuses), excuseText);
    }
}

function getRandomExcuse(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function writeOnTextArea(str, element) {
    element.textContent = str;
}
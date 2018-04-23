
window.onload = function() {
    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');
    const excuseText = document.getElementById('excuse-text');
    const excuses = excuseArray.excuses;

    writeOnTextArea(getRandomExcuse(excuses), excuseText);

    generateButton.onclick = function() {
        writeOnTextArea(getRandomExcuse(excuses), excuseText);
        deselectText();
        setButtonText(copyButton, 'Copiar');
    }

    copyButton.onclick = function() {
        copyContentToClipboard(excuseText);
        setButtonText(copyButton, 'Copiado');
    }
}

function getRandomExcuse(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function writeOnTextArea(str, element) {
    element.innerText = str;
}

function copyContentToClipboard(element) {
    selectText(element);
    document.execCommand("Copy");
}

function selectText(element) {
    window.getSelection().selectAllChildren(element);
}

function deselectText() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

function setButtonText(buttonElement, str) {
    buttonElement.textContent = str;
}
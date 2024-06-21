const doc = {
    textdisplay: document.getElementById('textDisplay')
}

const menu = {
    container: document.getElementById('menuContainer'),
    bgcolorinput: document.getElementById('bgColorInput'),
    textinput: document.getElementById('textInput'),
    textcolorinput: document.getElementById('textColorInput'),
    textsizerange: document.getElementById('textSizeRange'),
    bgcolorlabelrgb: document.getElementById('bgColorLabelRgb'),
    bgcolorlabelhex: document.getElementById('bgColorLabelHex'),
    textcolorlabelrgb: document.getElementById('textColorLabelRgb'),
    textcolorlabelhex: document.getElementById('textColorLabelHex'),
    hidebutton: document.getElementById('menuHideBtn')
}

// Hex to RGB function
function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
}

menu.bgcolorinput.addEventListener('input', () => {
    document.body.style.backgroundColor = menu.bgcolorinput.value;
    menu.bgcolorlabelrgb.textContent = hexToRgb(menu.bgcolorinput.value);
    menu.bgcolorlabelhex.textContent = menu.bgcolorinput.value;
});

menu.textcolorinput.addEventListener('input', () => {
    doc.textdisplay.style.color = menu.textcolorinput.value;
    menu.textcolorlabelrgb.textContent = hexToRgb(menu.textcolorinput.value);
    menu.textcolorlabelhex.textContent = menu.textcolorinput.value;
});

menu.textinput.addEventListener('input', () => {
    doc.textdisplay.innerText = menu.textinput.value;
});

menu.textsizerange.addEventListener('input', () => {
    doc.textdisplay.style.fontSize = menu.textsizerange.value + 'px';
});

menu.hidebutton.addEventListener('click', () => {
    menu.container.style.display = 'none';
});

addEventListener('dblclick' , (e) => {
    if (!menu.container.contains(e.target) && menu.container.style.display !== 'block') {
        menu.container.style.display = 'block';
    }
});
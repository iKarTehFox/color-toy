import { getElement } from './utils/dom-utils'
import hexRgb from 'hex-rgb';
import * as bootstrap from 'bootstrap';

export const doc = {
    textdisplay: document.getElementById('textDisplay')
}

export const menu = {
    container: getElement<HTMLDivElement>('menuContainer'),
    bgcolorinput: getElement<HTMLInputElement>('bgColorInput'),
    textinput: getElement<HTMLInputElement>('textInput'),
    textcolorinput: getElement<HTMLInputElement>('textColorInput'),
    textsizerange: getElement<HTMLInputElement>('textSizeRange'),
    bgcolorlabelrgb: getElement<HTMLSpanElement>('bgColorLabelRgb'),
    bgcolorlabelhex: getElement<HTMLSpanElement>('bgColorLabelHex'),
    textcolorlabelrgb: getElement<HTMLSpanElement>('textColorLabelRgb'),
    textcolorlabelhex: getElement<HTMLSpanElement>('textColorLabelHex'),
    hidebutton: getElement<HTMLButtonElement>('menuHideBtn'),
    togglefsbtn: getElement<HTMLButtonElement>('toggleFullscreenBtn')
}

function updateColorLabels(rgbLabel: HTMLSpanElement, hexLabel: HTMLSpanElement, color: string): void {
    const rgbArray = hexRgb(color, {format: 'array'});
    const rgbFormat = `${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}`;
    rgbLabel.textContent = rgbFormat;
    hexLabel.textContent = color;
}

function setMenuVis(display: string): void {
    menu.container.style.display = display;
}

// Background color input listener
menu.bgcolorinput.addEventListener('input', () => {
    document.body.style.backgroundColor = menu.bgcolorinput.value;
    updateColorLabels(menu.bgcolorlabelrgb, menu.bgcolorlabelhex, menu.bgcolorinput.value);
});

// Text color input listener
menu.textcolorinput.addEventListener('input', () => {
    doc.textdisplay.style.color = menu.textcolorinput.value;
    updateColorLabels(menu.textcolorlabelrgb, menu.textcolorlabelhex, menu.textcolorinput.value);
});

// Text input listener
menu.textinput.addEventListener('input', () => {
    doc.textdisplay.innerText = menu.textinput.value;
});

// Text size range listener
menu.textsizerange.addEventListener('input', () => {
    doc.textdisplay.style.fontSize = `${menu.textsizerange.value}px`;
});

// Hide menu button listener
menu.hidebutton.addEventListener('click', () => {
    setMenuVis('none');
});

// Toggle fullscreen button listener
menu.togglefsbtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

document.addEventListener('dblclick', (e) => {
    if (e.target instanceof Node && !menu.container.contains(e.target) && menu.container.style.display !== 'block') {
        setMenuVis('block');
    }
});
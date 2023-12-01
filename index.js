
const guiContainer = document.createElement('div');
guiContainer.style.backgroundColor = '#fff';
guiContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
guiContainer.style.borderRadius = '10px';
guiContainer.style.padding = '20px';
guiContainer.style.textAlign = 'center';
guiContainer.style.position = 'absolute';
guiContainer.style.top = '50%';
guiContainer.style.left = '50%';
guiContainer.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(guiContainer);


const header = document.createElement('div');
header.textContent = 'GUI Menu for Skids';
header.style.fontWeight = 'bold';
header.style.fontSize = '1.5em';
header.style.marginBottom = '20px';
guiContainer.appendChild(header);

let isDragging = false;
let offsetX, offsetY;

function handleMouseDown(event) {
    isDragging = true;
    offsetX = event.clientX - guiContainer.getBoundingClientRect().left;
    offsetY = event.clientY - guiContainer.getBoundingClientRect().top;
}

function handleMouseMove(event) {
    if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        guiContainer.style.left = `${x}px`;
        guiContainer.style.top = `${y}px`;
    }
}

function handleMouseUp() {
    isDragging = false;
}

guiContainer.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

const button1 = document.createElement('button');
button1.textContent = 'Button 1';
button1.style.backgroundColor = '#007bff';
button1.style.color = '#fff';
button1.style.border = 'none';
button1.style.borderRadius = '5px';
button1.style.padding = '10px 20px';
button1.style.margin = '10px';
button1.style.cursor = 'pointer';
guiContainer.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'Button 2';
button2.style.backgroundColor = '#007bff';
button2.style.color = '#fff';
button2.style.border = 'none';
button2.style.borderRadius = '5px';
button2.style.padding = '10px 20px';
button2.style.margin = '10px';
button2.style.cursor = 'pointer';
guiContainer.appendChild(button2);

button1.addEventListener('click', function () {
    alert('put your chat gpt code here bro');
});

button2.addEventListener('click', function () {
    alert('put your chat gpt code here bro');
});

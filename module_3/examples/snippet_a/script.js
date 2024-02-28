let playground = document.getElementById('playground');

function proccess_button_click() {
    this.remove();
}

let button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Remove me';
button.classList.add('btn');
button.classList.add('btn-primary');
button.onclick = proccess_button_click;

playground.appendChild(button);
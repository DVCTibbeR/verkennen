let alert_btn = document.getElementById('alert-btn');
alert_btn.onclick = function () {
    alert('Je hebt op de button geklikt');
}

let confirm_btn = document.getElementById('confirm-btn');
confirm_btn.onclick = function () {
    let action = confirm('Weet je zeker dat je de kleur wilt verranderen?');
    if (action){
        if (this.classList.contains('btn-danger')){
            this.classList.remove('btn-danger');
            this.classList.add('btn-success');
        }else{
            this.classList.remove('btn-success');
            this.classList.add('btn-danger');
        }
    }
}

let prompt_btn = document.getElementById('prompt-btn');
prompt_btn.onclick = function () {
    let newText = prompt('Welke tekst moet de button weergeven?');
    
    if (newText != null && newText.length > 0){
        this.innerHTML = newText;
    }
}

const buttons = document.querySelectorAll('button');

const playnote = event =>{
    console.log(event.target.dataset.note);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)  
);
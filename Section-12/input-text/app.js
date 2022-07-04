let p = document.querySelector('p');

function handleInput(event){
    let inputText = event.target.value;
    p.textContent = inputText;
    console.dir(event);
}

inputField.addEventListener('input', handleInput);
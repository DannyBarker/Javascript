let textArea = document.querySelector("#words");
let button = document.querySelector("#create");
let newElement = document.querySelector("#newCard");
let cardNum = 0;
const createCard = () => {
    let userInput = textArea.value
    cardNum++;
    newElement.innerHTML += `
    <article class="card" id="card--${cardNum}">
    <div>${userInput}</div>
    <div>
    <button class= "delete" id="delete--${cardNum}">Delete This Card</button>
    </div>
    </article>
    `
    textArea.value = "";

    addDeleteEvent()
       
}

const delButton = () => {
    let cardId = event.target.id.split('--');
    const deleteNum = `card--${cardId[1]}`;
    const deleteThis = document.getElementById(deleteNum);
    deleteThis.parentNode.removeChild(deleteThis);
    
}

const addDeleteEvent = () => {
    let allDelButtons = document.querySelectorAll(".delete");
    allDelButtons.forEach(byeButton => {
        byeButton.addEventListener('click', delButton)
    });
}

button.addEventListener('click', createCard)
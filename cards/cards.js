let textArea = document.querySelector("#words");
let button = document.querySelector("#create");
let newElement = document.querySelector("#newCard");
let cardId = 0;
let delCard = 0;
button.addEventListener('click', () => {
    let userInput = textArea.value
    cardId++;
    delCard++;
    newElement.innerHTML += `
    <article class="card" id="card--${cardId}">
    <div>${userInput}</div>
    <div>
        <button id="delete--${delCard}">Delete This Card</button>
    </div>
    </article>
    `
    textArea.value = "";
    
})


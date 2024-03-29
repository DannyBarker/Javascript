// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

let inputText = document.querySelector("#message");
let textBox1 = document.querySelector("#article1");
let textBox2 = document.querySelector("#article2");
inputText.addEventListener('keyup', (event) => {
    textBox1.innerHTML = event.target.value
    console.log(event);
});
inputText.addEventListener('keyup', (event) => textBox2.textContent = event.target.value);
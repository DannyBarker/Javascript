const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
const container = document.querySelector("body")

window.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    audrey.style.minWidth = `50px`;
    audrey.style.width = window.scrollY / 3 + `px`;

    audrey.style.minHeight = `100px`;
    audrey.style.height = window.scrollY / 4 + `px`;

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})
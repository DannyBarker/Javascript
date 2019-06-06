// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled 
// class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flightSection = document.querySelector("#flight");
const flightHandlerFunction = () => {
 flightSection.classList.toggle('disabled')
 flightSection.classList.toggle('enabled');
console.log(flightSection);
    
}
document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction);

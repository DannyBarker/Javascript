// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled 
// class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flightSection = document.querySelector("#flight");

const mindreadingSection = document.querySelector("#mindreading");

const xraySection = document.querySelector("#xray");



document.addEventListener("click", () => {
    let idName = event.target.id.split("-");
    let section = document.querySelector("idName[i]");
    const allEnabled = document.querySelectorAll("section");
    console.log(idName);
    if (idName[0] === 'activate' && idName[1] === 'all') {
        allEnabled.forEach( disable => {
            if (disable.classList.contains('disabled')) {
                disable.classList.toggle('disabled');
                disable.classList.toggle('enabled');   
            }
        });
    }else if (idName[1] === 'all') {
        allEnabled.forEach( className => {
            if (className.classList.contains('enabled')) {
                className.classList.toggle('disabled');
                className.classList.toggle('enabled');   
            }
        });
    } else {
        activatePower(idName[1]);
        
    }
})

const activatePower = (id) => {
    if (document.querySelector(`#${id}`).classList.contains('disabled')) {
        document.querySelector(`#${id}`).classList.toggle('disabled');
        document.querySelector(`#${id}`).classList.toggle('enabled');
    }

}



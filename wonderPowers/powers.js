// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled 
// class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flightSection = document.querySelector("#flight");

const mindreadingSection = document.querySelector("#mindreading");

const xraySection = document.querySelector("#xray");

const allEnabled = document.querySelectorAll("section");
const allDisabled = document.querySelectorAll("section");


const turnAllOn = () => {
    allEnabled.forEach(disabled => {
        if (disabled.classList.contains('disabled')) {
            disabled.classList.toggle('disabled');
            disabled.classList.toggle('enabled');
        }
    });
}


const turnAllOff = () => {
    allDisabled.forEach(enable => {
        if (enable.classList.contains('enabled')) {
            enable.classList.toggle('enabled');
            enable.classList.toggle('disabled');
        }
    });
}

const flightHandlerFunction = () => {
    if (flightSection.classList.contains('disabled')) {
        flightSection.classList.toggle('disabled');
        flightSection.classList.toggle('enabled');
    }
}

const mindreadingPower = () => {
    if (mindreadingSection.classList.contains('disabled')) {
        mindreadingSection.classList.toggle('disabled');
        mindreadingSection.classList.toggle('enabled');
    }
}

const xrayPower = () => {
    if (xraySection.classList.contains('disabled')) {
        xraySection.classList.toggle('disabled');
        xraySection.classList.toggle('enabled');
    }
}


document.querySelector("#activate-mindreading").addEventListener('click', mindreadingPower);
document.querySelector("#activate-xray").addEventListener('click', xrayPower);
document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction);
document.querySelector("#activate-all").addEventListener('click', turnAllOn);
document.querySelector("#deactivate-all").addEventListener('click', turnAllOff);

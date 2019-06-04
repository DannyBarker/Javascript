// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value


const pet = {
    name: "Murphis",
    species: "Aussie mix",
    nicknames: ["Murph", "Poochie Bone", "Mr. Fuzzy Man"],
    age: 4,
    goOut: function(action) {
        let nick = this.randomNick()
        return `${nick} wants to go out and ${action}.`;
    },
    randomNick: function() {
        return this.nicknames[2];
    }
}

let msg = pet.goOut("chase chipmunks");
document.querySelector(".dog-msg").textContent = msg

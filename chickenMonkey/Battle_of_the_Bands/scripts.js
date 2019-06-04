let bandNumber = 1
// let bands = ["null"]
// const takeNumber = function(bandName) {
//     bands.push(bandName);
//     console.log(bands)
//     for (let bandNumber = 1; bandNumber <= bands.length; bandNumber++){
//         if(bandName === bandName) {
//             return [bandNumber] + ". " + bands[bandNumber];
//         }
//     }
// }
const takeNumber = function(bandName) {
    let num = bandNumber;
    bandNumber++;
    return `${num}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
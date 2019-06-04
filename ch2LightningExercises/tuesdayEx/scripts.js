// Tuesday Exercise 1
// Tuesday Exercise 1
// Tuesday Exercise 1

let listOfObjects = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

for (let i = 0; i < listOfObjects.length; i++) {
  let name = listOfObjects[i].name;
  let title = listOfObjects[i].title;
  console.log(`${name}'s job title is ${title}`);
}

let nums = [1, 2, 3, 4, 5];
nums.forEach(function(item) {
  console.log("This is a number:", item);
});

//   Tuesday Exercise 2
//   Tuesday Exercise 2
//   Tuesday Exercise 2

function dogBreed(breed) {
  if (breed) {
    return `my favorite dog breed is ${breed}.`;
  } else {
    return `I like cats`;
  }
}
let message = dogBreed("Mountain Mastiff");
console.log(`When it comes to pets,`, message);
let sad = dogBreed();
console.log(`When it comes to pets,`, sad);

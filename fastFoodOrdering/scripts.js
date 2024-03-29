// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.



const restaurant = {
    name: "Bob's Burgers",
    order: [],
    placeOrder: function (meal) {
        restaurant.order.push(`{sandwhichType: ${meal.sandwichType}, fries: ${meal.fries}, drinkSize: ${meal.drinkSize}},`) 
        
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken Sandwhich",
    fries: true,
    drinkSize: "Medium",
}
const Nug = {
    sandwichType: "Nuggets",
    fries: false,
    drinkSize: "large",
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(Nug)

console.log('restaurant :', restaurant);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
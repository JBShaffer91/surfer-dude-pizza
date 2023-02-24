# Surfer Dude Pizza

## TDD Testing

### DESCRIBE: class PizzaOrder:

### TEST: "This class should have properties for the size, crust, toppings, and quantity."

### CODE:

class PizzaOrder {
  constructor(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }

### DESCRIBE: function calculateCost()

### TEST: "This function takes in the size, crust, toppings, and quantity selected by the user and calculates the total cost of the pizza based on those options."

### CODE: 

function calculateCost(size, crust, toppings, quantity) {
  // Define prices for different options
  const sizePrices = {
    small: 8,
    medium: 10,
    large: 12
  };
  const crustPrices = {
    thin: 0,
    thick: 2,
    "gluten-free": 3
  };
  const toppingPrices = {
    pepperoni: 1,
    sausage: 1,
    bacon: 1,
    ham: 1,
    pineapple: 0.5,
    mushrooms: 0.5,
    onions: 0.5,
    olives: 0.5,
    "extra-cheese": 1
  };

  // Calculate the base cost based on the selected size
  let baseCost = sizePrices[size];

  // Add the cost of the selected crust
  baseCost += crustPrices[crust];

  // Add the cost of each selected topping
  let toppingCost = 0;
  for (let i = 0; i < toppings.length; i++) {
    toppingCost += toppingPrices[toppings[i]];
  }

  // Multiply the total cost by the quantity
  const totalCost = (baseCost + toppingCost) * quantity;

  // Return the calculated total cost
  return totalCost;
}

### DESCRIBE: function generateReceipt

### TEST: "This function takes an order object as an argument, then it retrieves the order's size, crust, toppings, quantity, and total cost using the respective methods of the Order class, then creates a list of the selected toppings using the map method and the template literal syntax to generate an HTML list of toppings. Finally, it generates an HTML string for the receipt using the template literal syntax, and returns it as the result. The total cost is formatted with the toFixed method to display two decimal places."

### CODE:

function generateReceipt(order) {
  const size = order.getSize();
  const crust = order.getCrust();
  const toppings = order.getToppings();
  const quantity = order.getQuantity();
  const total = order.calculateCost();
  
  const toppingsList = toppings.map(topping => `<li>${topping}</li>`).join('');

  const receipt = `
    <h2>Order Receipt</h2>
    <p><strong>Size:</strong> ${size}</p>
    <p><strong>Crust:</strong> ${crust}</p>
    <p><strong>Toppings:</strong></p>
    <ul>${toppingsList}</ul>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Total Cost:</strong> $${total.toFixed(2)}</p>
  `;
  
  return receipt;
}

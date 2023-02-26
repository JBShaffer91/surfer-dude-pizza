# Surfer Dude Pizza

## Introduction
This project is a web application that allows users to order pizza online. The application calculates the cost of the pizza based on the selected size, crust, toppings, and quantity, and generates a receipt for the order.

## Installation
To install and run this project, please follow these steps:

Clone the repository: git clone https://github.com/your-username/surfer-dude-pizza.git
Navigate to the project directory: cd surfer-dude-pizza
Open the index.html file in your web browser.

## Usage
To use the application, follow these steps:

Select the size of your pizza: small, medium, or large.
Select the crust of your pizza: thin, thick, or gluten-free.
Select the toppings you would like on your pizza by checking the checkboxes.
Enter the quantity of pizzas you would like to order.
Click the "Place Order" button to see the order summary and total cost.

## Business Logic
The PizzaOrder class is responsible for calculating the cost of the pizza based on the selected options and quantity, and generating a receipt for the order. It has four properties: size, crust, toppings, and quantity.

The calculateCost() method calculates the total cost of the pizza based on the selected size, crust, toppings, and quantity. It uses three objects to store the prices for different options: sizePrices, crustPrices, and toppingPrices. It adds the cost of the selected size and crust, and then adds the cost of each selected topping. Finally, it multiplies the total cost by the quantity and returns the calculated total cost.

The generateReceipt() method generates an HTML string for the receipt using the template literal syntax, and returns it as the result. It retrieves the size, crust, toppings, quantity, and total cost using the respective properties and calculateCost() method of the PizzaOrder class. The toppings are displayed as an HTML list using the map() method and template literal syntax. The total cost is formatted with the toFixed() method to display two decimal places.

## User Interface Logic
The user interface logic is responsible for handling user input and displaying the order summary and total cost. It listens for the submit event on the pizza-form element, and retrieves the selected options and quantity. It then creates a new PizzaOrder object with the selected options and quantity, generates a receipt using the generateReceipt() method, and displays the receipt in the order-summary element.

## Testing
The project includes a testing section using the Test-Driven Development (TDD) approach. The tests are written in plain English and use the describe() and it() functions to organize the tests. They cover the properties and methods of the PizzaOrder class

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

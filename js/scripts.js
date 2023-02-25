// Business Logic
class PizzaOrder {
  constructor(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }

  calculateCost() {
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

    let baseCost = sizePrices[this.size];
    baseCost += crustPrices[this.crust];

    let toppingCost = 0;
    for (let i = 0; i < this.toppings.length; i++) {
      toppingCost += toppingPrices[this.toppings[i]];
    }

    const totalCost = (baseCost + toppingCost) * this.quantity;

    return totalCost;
  }

  generateReceipt() {
    const size = this.size;
    const crust = this.crust;
    const toppings = this.toppings;
    const quantity = this.quantity;
    const total = this.calculateCost();

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
}

// User Interface Logic
window.onload = function() {
  const form = document.getElementById("pizza-form");
  const orderSummary = document.getElementById("order-summary");
  const size = document.getElementById("size");
  const crust = document.getElementById("crust");
  const quantity = document.getElementById("quantity");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const toppingsArray = Array.from(toppings).map(topping => topping.value);
    const order = new PizzaOrder(size.value, crust.value, toppingsArray, quantity.value);
    const receipt = order.generateReceipt();
    orderSummary.innerHTML = receipt;
    orderSummary.style.display = "block";
  });
};

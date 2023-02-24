// Buisness Logic

class PizzaOrder {
  constructor(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }
  calculateCost(size, crust, toppings, quantity) {
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
  
    let baseCost = sizePrices[size];
    baseCost += crustPrices[crust];
  
    let toppingCost = 0;
    for (let i = 0; i < toppings.length; i++) {
      toppingCost += toppingPrices[toppings[i]];
    }
  
    const totalCost = (baseCost + toppingCost) * quantity;
  
    return totalCost;
  }
  generateReceipt(order) {
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
}  
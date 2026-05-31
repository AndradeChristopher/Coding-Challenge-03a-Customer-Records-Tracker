let customers = [
  {
    name: "John Smith",
    email: "johnsmith@email.com",
    purchases: ["Laptop", "Mouse", "Keyboard"]
  },
  {
    name: "Sarah Doe",
    email: "sarahdoe@email.com",
    purchases: ["Tablet", "Phone Case"]
  },
  {
    name: "Bob Brown",
    email: "bobbrown@email.com",
    purchases: ["Monitor"]
  }
];

customers.push({
  name: "Mary Davis",
  email: "marydavis@email.com",
  purchases: ["Smart Watch", "Headphones"]
});

customers.shift(); // Removes the first element in an array

customers[0].email = "sarah.doe@newemail.com";
customers[0].purchases.push("Wireless Charger");

customers.forEach(function(customer) {
  console.log(`Customer Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log(""); // spacer
});

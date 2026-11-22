"use strict";
const Storename = "ElectroShop";
let Storedescription = "Electronics Store";
const Currency = "JOD";
let NumberofAvailableProducts = 5;
let isStoreOpen = true;
let electroProduct = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];
let productInfo = [
    ["Laptop", 800, true],
    ["Phone", 400, true],
    ["Headphones", 80, true],
    ["Keyboard", 150, false],
    ["Mouse", 50, true]
];
if (isStoreOpen) {
    console.log("Store is open");
}
else {
    console.log("Store is closed");
}
let price = 1000;
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100 && price <= 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let i = 0; i < electroProduct.length; i++) {
    console.log(electroProduct[i]);
}
let count = 0;
for (let i = 0; i < productInfo.length; i++) {
    if (productInfo[i][1] > 100) {
        count++;
    }
}
console.log("Products greater than 100:", count);
function calculateDiscount(originalPrice, discountPer) {
    let discount = originalPrice * (discountPer / 100);
    let finalPrice = originalPrice - discount;
    return finalPrice;
}
console.log(calculateDiscount(1000, 16));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return ("In Stock");
    }
    else {
        return ("Out of Stock");
    }
}
console.log(checkProductAvailability(12));
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("Hello");
function displayProductInfo(Productname, Productprice, Productdescription, Currency = "USD") {
    console.log(Productname, Productprice, Productdescription, Currency);
}
function calculateTotalPrice(...numberofproductPrices) {
    let total = 0;
    for (let num of numberofproductPrices) {
        total = total + num;
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 200));
const products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650,
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75,
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45,
    },
];
let loadPr = document.getElementById("LoadProductsbtn");
let pro = document.getElementById("products");
loadPr?.addEventListener("click", () => {
    if (!pro)
        return;
    pro.innerHTML = "";
    for (let item of products) {
        pro.innerHTML += `
        <div class="product">
        <h2>${item.name}</h2>
         <h2>${item.price}</h2>
          <h2>${item.description}</h2>
        </div>
        
        
        `;
    }
});

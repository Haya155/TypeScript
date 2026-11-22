const Storename:string="ElectroShop" ;
let Storedescription:string="Electronics Store";
const Currency:string="JOD";
let NumberofAvailableProducts:number=5;
let isStoreOpen:boolean=true;

let electroProduct:string[]=[
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];
let productInfo: [string, number, boolean][] = [
    ["Laptop", 800, true],
    ["Phone", 400, true],
    ["Headphones", 80, true],
    ["Keyboard", 150,  false],
    ["Mouse", 50, true]
];
  
if(isStoreOpen){
    console.log("Store is open");
}
else{
    console.log("Store is closed");
}
let price:number=1000;
if(price>500){
    console.log("Expensive Product");
}
else if(price>=100&&price<=500){
    console.log("Medium Price");

}
else{
    console.log("Affordable Product");
}
for(let i=0;i<electroProduct.length;i++){
    console.log(electroProduct[i]);
}
let count: number = 0;

for (let i = 0; i < productInfo.length; i++) {
    if (productInfo[i][1] > 100) {
        count++;
    }
}

console.log("Products greater than 100:", count);

function calculateDiscount(originalPrice:number,discountPer:number ):number{
let discount=originalPrice * (discountPer/100);
let finalPrice =originalPrice - discount;
return finalPrice;

}
console.log(calculateDiscount(1000,16));
 
function checkProductAvailability(quantity:number):string{
if(quantity>0){
    return("In Stock");
}
else{
    return("Out of Stock");
}
}
console.log(checkProductAvailability(12));

function displayStoreMessage(message:string):void{
    console.log(message);
}
displayStoreMessage("Hello");

function displayProductInfo(Productname:string, Productprice:number,Productdescription?:string,Currency:string="USD"):void{
    console.log(Productname,Productprice,Productdescription,Currency);
}
function calculateTotalPrice (...numberofproductPrices:number[]):number{
let total=0;
for(let num of numberofproductPrices){
    total=total+num;

}
    return total;

}
console.log(calculateTotalPrice(100,200,200));

type product={
    name:string;
    description:string;
    price:number;
}
const products:product[]=[
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

let loadPr=document.getElementById("LoadProductsbtn");
let pro=document.getElementById("products");
loadPr?.addEventListener("click",()=>{
    if(!pro)return;
    pro.innerHTML="";
    
    for(let item of products){
        pro.innerHTML+=`
        <div class="product">
        <h2>${item.name}</h2>
         <h2>${item.price}</h2>
          <h2>${item.description}</h2>
        </div>
        
        
        `;

    }
});
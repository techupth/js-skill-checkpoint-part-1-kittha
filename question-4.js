// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestInventory = inventory.sort((a, b) => a.quantity - b.quantity)[0];
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowestInventory.name} ซึ่งมี ${lowestInventory.quantity} ชิ้น`
);

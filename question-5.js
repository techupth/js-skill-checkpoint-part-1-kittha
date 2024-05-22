// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  // calculate total value in shopping cart
  let totalPrice = 0;
  for (let item of products) {
    let totalPricePerProduct = 0;
    totalPricePerProduct = item["price"] * item["quantity"];
    totalPrice += totalPricePerProduct;
  }

  // applied %discount coupon (optional)
  switch (promotionCode) {
    case "SALE20":
      return totalPrice * 0.8;
      break;
    case "SALE50":
      return totalPrice * 0.5;
      break;
    default:
      return totalPrice;
  }
}

console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));

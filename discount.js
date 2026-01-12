const price = 6500;
const age = 12;
// 20 percent discount
if (age < 15) {
  const discount = (price * 40) / 100;
  const discountPrice = price - discount;
  console.log(discountPrice);
} else if (age < 18) {
  const discount = (price * 20) / 100;
  const discountPrice = price - discount;
  console.log(discountPrice);
} else if (age >= 60) {
  const discount = (price * 50) / 100;
  const discountPrice = price - discount;
  console.log(discountPrice);
} else {
  console.log(price);
}

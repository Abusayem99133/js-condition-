const isRain = false;
if (isRain) {
  console.log("Take an Umbrella");
} else {
  console.log("No Umbrella needed");
}

const price = 600;
if (price >= 500) {
  console.log("Delivery Charge Free");
} else {
  console.log("Give me delivery charge 50 tk only");
}

const burger = 550;
if (burger >= 600) {
  console.log("Free Fries + Free Coke");
} else if (burger >= 400 && burger <= 600) {
  console.log("Free Coke");
} else {
  console.log("Fries 50 tk + Coke 30 tk");
}

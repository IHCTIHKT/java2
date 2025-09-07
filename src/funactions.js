export const tomatoPrice = (kg, priceForKg = 450) => {
  return kg * priceForKg;
};
console.log(tomatoPrice(2));

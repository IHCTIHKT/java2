function numberPower(n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2) return false;
    n /= 2;
  }
  return true;
}
console.log(numberPower(8));
console.log(numberPower(1024));

let number = [20, 50, 70, 200, 600]

for (let total of number) {
  let tax;
  let sum;
  // If number is under 100, tax is 0

  if (total <= 100) {
    tax = 0;
    // If number is over 400, tax only 10%
    } else if (total >= 400) {
      tax = total * .10
  } else {
    tax = total * .25
  }
  sum = total - tax

  console.log("total is: " + total + "kr")
  console.log("tax is: " + tax + "kr")
  console.log("sum is: " + sum + "kr")
}

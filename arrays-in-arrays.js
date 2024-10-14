const grid = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}
console.log("----------------------------------------");

const donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];
// here, donutBox.length refers to the number of rows of donuts
for (let row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}

console.log("--------------------------------------------------------");

for (let row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (let column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

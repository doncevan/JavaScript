const inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2],
];
inventory.push(["phone", 500]);
console.log(inventory.length);
console.log(inventory);

const donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled",
  "powdered",
];
donuts.pop(); // the `pop()` method returns "powdered" because "powdered" was the last element on the end of `donuts` array
console.log(donuts);

const donuts1 = ["glazed", "strawberry frosted", "powdered", "Boston creme"];
donuts1.pop();
donuts1.pop();
donuts1.pop();
donuts1.push("maple walnut");
donuts1.pop();
donuts1.push("sprinkled");
console.log(donuts1);

const donuts2 = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts2.splice(1, 2, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1
// and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(donuts2);

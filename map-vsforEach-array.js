const myKids = ["Emma", "Daniel", "Serghei", "Jana", "Timothy", "Ella", "Samuel", "James"];

const myKidsMaped = myKids.map(function (child) {
  child += " Doncev";
  return child;
});
console.log(myKidsMaped);

console.log("-------------------");

myKids.forEach(function (child) {
  child += " Doncev";
  console.log(child);
});

const myKids = ["Emma", "Daniel", "Serghei", "Jana", "Timothy", "Ella", "Samuel", "James"];

myKids.forEach(function (child) {
  child += " Doncev";
  console.log(child);
});
console.log("-------------------");
for (let i = 0; i < myKids.length; i++) {
  myKids[i] += " Doncev";
  myKids[i] = myKids[i].toUpperCase();
  console.log(myKids[i]);
}
console.log(myKids);

console.log("---------------------");
words = ["cat", "in", "hat"];
words.forEach(function (word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

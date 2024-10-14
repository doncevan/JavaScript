const umbrella = {
  color: "pink",
  isOpen: false, // change to 'true' to see how method works
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
};

console.log(umbrella.isOpen);
console.log(umbrella.open());
console.log(umbrella.isOpen);

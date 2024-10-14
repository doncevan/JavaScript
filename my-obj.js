const myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function () {
    return "yummy";
  },
};

console.log(
  "This " +
    myObj.type +
    " has an " +
    myObj.color +
    " color, and shape of " +
    myObj.shape +
    ". When you eat it it's " +
    myObj.eat() +
    ", what is it?"
);

const userProfile = {
  firstName: "Ivan",
  lastName: "Doncev",
  age: 48,
  married: true,
  children: 8,
};
const myChildren = [
  {
    name: "Emma",
    relation: "daughter",
    age: 23,
    isStudent: false,
  },
  {
    name: "Daniel",
    relation: "son",
    age: 21,
    isStudent: true,
  },
  {
    name: "James",
    relation: "son",
    age: 1,
    isStudent: true,
  },
];
function getPersonalData(profile, kids) {
  return (
    "My name is " +
    profile.firstName +
    ", I love my " +
    profile.children +
    " children, " +
    "and I feel good at age of " +
    profile.age +
    ". Also, my oldest " +
    kids[0].relation +
    "'s name is " +
    kids[0].name +
    ". My yongest " +
    kids[2].relation +
    "'s name is " +
    kids[2].name +
    ", and he is " +
    kids[2].age +
    " years old."
  );
}

const personalInfo = getPersonalData(userProfile, myChildren);
console.log(personalInfo);

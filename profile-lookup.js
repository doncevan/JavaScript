const childrenProfile = [
  {
    firstName: "Emma",
    birthOrder: 1,
    age: 23,
  },
  {
    firstName: "Daniel",
    birthOrder: 2,
    age: 21,
  },
  {
    firstName: "Serghei",
    birthOrder: 3,
    age: 19,
  },
  {
    firstName: "Jana",
    birthOrder: 4,
    age: 16,
  },
  {
    firstName: "Timothy",
    birthOrder: 5,
    age: 11,
  },
  {
    firstName: "Ella",
    birthOrder: 6,
    age: 9,
  },
  {
    firstName: "Samuel",
    birthOrder: 7,
    age: 3,
  },
  {
    firstName: "James",
    birthOrder: 8,
    age: 0,
  },
];

function getAgeOfChild(firstName, birthOrder) {
  let foundProfile = null;

  //Iterate over each profile
  childrenProfile.forEach((profile) => {
    if (profile.firstName === firstName && profile.birthOrder === birthOrder) {
      foundProfile = profile.age;
    }
  });
  if (!foundProfile) {
    return "No matching profile";
  }
  return foundProfile;
}
// Call the function
let childAge = getAgeOfChild("Serghei", 3);
console.log(childAge);

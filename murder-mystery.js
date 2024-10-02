/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code

const room = "gallery";
const suspect = "Ms. Van Cleve";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let solved = false;

/*
 * To help solve this mystery, write a combination of conditional statements that:
 * 1. sets the value of weapon based on the room and
 * 2. sets the value of solved to true if the value of room matches the suspect's room
 */
if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room === "billiards room" && suspect === "Mr. Parkes") {
  weapon = "pool stick";
  solved = true;
} else if (room === "dining room" && suspect === "Mrs. Sparr") {
  weapon = "knife";
  solved = true;
}

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else {
  console.log("The case is not solved!");
}
/* ****************************************** */

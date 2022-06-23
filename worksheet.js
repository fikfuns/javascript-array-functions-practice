const { compareDocumentPosition } = require("domutils");

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
console.log("--------MAP Q1---------");
characters.map((character) => {
  console.log(character.name);
});

//2. Get array of all heights
console.log("-----------MAP Q2---------");
characters.map((character) => {
  console.log(character.height);
});

//3. Get array of objects with just name and height properties
console.log("-----------MAP Q3---------");
characters.map((character) => {
  console.log(character.name);
  console.log(character.height);
});
//4. Get array of all first names
console.log("-----------MAP Q4---------");
characters.map((character) => {
  const newarr = character.name.split(" ")[0];
  console.log(newarr);
});

//***REDUCE***
//1. Get total mass of all characters
console.log("--------Reduce Q1-----------");
const initialMass = 0;
const totalMass = characters.reduce((firstMass, currentMass) => {
  return firstMass + currentMass.mass;
}, initialMass);
console.log(totalMass);
//2. Get total height of all characters
console.log("--------Reduce Q2-----------");
const initialHeight = 0;
const totalHeight = characters.reduce((firstHeight, currentHeight) => {
  return firstHeight + currentHeight.height;
}, initialHeight);
console.log(totalHeight);
//3. Get total number of characters by eye color
console.log("--------Reduce Q3-----------");

const totalColor = characters.reduce((firstColor, currentColor) => {
  const color = currentColor.eye_color;
  if (firstColor[color]) {
    firstColor[color] += 1;
  } else {
    firstColor[color] = 1;
  }
  return firstColor;
}, {});
console.log(totalColor);
//4. Get total number of characters in all the character names
console.log("--------Reduce Q4-----------");

const totalCharNum = characters.reduce((acc, current) => {
  return acc + current.name.length;
}, 0);
console.log(totalCharNum);

//***FILTER***
//1. Get characters with mass greater than 100
console.log("-------Filter Q1----------");
const greaterHundred = characters.filter((char) => {
  return char.mass > 100;
});
console.log(greaterHundred);
//2. Get characters with height less than 200
console.log("----------Filter Q2----------");
const heightLess = characters.filter((char) => {
  return char.height > 200;
});
console.log(heightLess);

//3. Get all male characters
console.log("-------------Filter Q3-------------");
const maleChar = characters.filter((char) => {
  return char.gender === "male";
});
console.log(maleChar);

//4. Get all female characters
console.log("------------Filter Q4---------------");
const femaleChar = characters.filter((char) => {
  return char.gender === "female";
});
console.log(femaleChar);

//***SORT***
//1a. Sort by mass(increasing)
console.log("---------Sort Q1a--------");
const increasingMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});
console.log(increasingMass);

//1b. Sort by mass(decreasing)
console.log("---------Sort Q1b--------");
const decreasingMass = characters.sort((a, b) => {
  return b.mass - a.mass;
});
console.log(decreasingMass);

//2a. Sort by height(increasing)
console.log("---------Sort Q2a--------");
const increaseHeight = characters.sort((a, b) => {
  return a.height - b.height;
});
console.log(increaseHeight);

//2b. Sort by height(decreasing)
console.log("---------Sort Q2b--------");
const decreaseHeight = characters.sort((a, b) => {
  return b.height - a.height;
});
console.log(decreaseHeight);

//3. Sort by name
console.log("---------Sort Q3--------");
const ascendName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (b.name < a.name) return +1;
});
console.log(ascendName);
//4. Sort by gender
console.log("---------Sort Q4--------");
const charGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  if (b.gender < a.gender) return +1;
});
console.log(charGender);

//***EVERY***
//1. Does every character have blue eyes?
console.log("--------------Every Q1--------");
const isBlueEyes = (char) => {
  return char.eye_color === "blue";
};
console.log("Does every character have blue eyes?");
console.log(characters.every(isBlueEyes));

//2. Does every character have mass more than 40?
console.log("--------------Every Q2--------");
const moreThanForty = (char) => {
  return char.mass > 40;
};
console.log("Does every character have mass more than 40?");
console.log(characters.every(moreThanForty));

//3. Is every character shorter than 200?
console.log("--------------Every Q3--------");
const shorterThan = (char) => {
  return char.height < 200;
};
console.log("Is every character shorter than 200?");
console.log(characters.every(shorterThan));

//4. Is every character male?
console.log("--------------Every Q4--------");
const isMale = (char) => {
  return char.gender === "male";
};
console.log("Is every character male?");
console.log(characters.every(isMale));

//***SOME***
//1. Is there at least one male character?
console.log("---------------------Some Q1--------------");
const oneMale = (char) => {
  return char.gender === "male";
};
console.log("Is there at least one male character?");
console.log(characters.some(oneMale));
//2. Is there at least one character with blue eyes?
console.log("---------------------Some Q2--------------");
const oneBlue = (char) => {
  return char.eye_color === "blue";
};
console.log("Is there at least one character with blue eyes?");
console.log(characters.some(oneBlue));
//3. Is there at least one character taller than 210?
console.log("---------------------Some Q3--------------");
const oneTaller = (char) => {
  return char.height > 210;
};
console.log("Is there at least one character taller than 210?");
console.log(characters.some(oneTaller));

//4. Is there at least one character that has mass less than 50?
console.log("---------------------Some Q4--------------");
const oneMass = (char) => {
  return char.mass < 50;
};
console.log("Is there at least one character that has mass less than 50?");
console.log(characters.some(oneMass));

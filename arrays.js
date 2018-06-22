var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var liverpoolPlayers = ["hendo", "bobby", "salah"];
  return ["mane", ...liverpoolPlayers];
}

function destructivelyAddElementToBeginningOfArray() {
  var shoeBrands = ["nike", "adidas", "fila"];
  shoeBrands.unshift("asics");
}

function addElementToEndOfArray() {
  var kartCharacters = ["yoshi", "toad", "peach"];
  [...kartCharacters, "bowser"];
}

function destructivelyAddElementToEndOfArray() {
  var cereals = ["cheerios", "bran", "flakes"];
  cereals.push("smacks");
}

function accessElementInArray() {
  var presidents = ["washington", "adams", "jefferson"];
  presidents[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var fruits = ["apple", "grapes", "pears"];
  fruits.shift();
  fruits;
}

function removeElementFromBeginningOfArray() {
  var veggies = ["avocado", "squash", "potato"];
  veggies.slice(0);
  veggies;

}

function destructivelyRemoveElementFromEndOfArray() {
  var yogurts = ["vanilla", "coffee", "strawberry"];
  yogurts.pop();
  yogurts;
}

function removeElementFromEndOfArray() {
  var junk = ["garbage", "nonsense", "trash"];
  junk.slice(0, 2);
  junk;
}


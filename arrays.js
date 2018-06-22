var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var liverpoolPlayers = ["hendo", "bobby", "salah"];
  ["mane", ...liverpoolPlayers];
}

function destructivelyAddElementToBeginningOfArray() {
  var shoeBrands = ["nike", "adidas", "fila"];
  shoeBrands.unshift("asics");
}


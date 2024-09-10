function checkOpeningClosing(string) {
  const dictionary = [
    {
      opening: "[",
      closing: "]",
    },
    {
      opening: "{",
      closing: "}",
    },
    {
      opening: "(",
      closing: ")",
    },
  ];

  let openingPile = [];
  let isValid = true;

  if (string.length % 2 != 0) {
    return false;
  } else {
    for (let character of string) {
      if (dictionary.findIndex((item) => item.opening === character) != -1) {
        openingPile.push(character);
      } else {
        const lastOpening = openingPile.pop();
        if (
          character !=
          dictionary.find((item) => item.opening === lastOpening).closing
        ) {
          isValid = false;
        }
      }
    }
  }

  return isValid;
}

console.log(checkOpeningClosing("({[]})"));
console.log(checkOpeningClosing("{(])}"));
console.log(checkOpeningClosing("{([)]}"));

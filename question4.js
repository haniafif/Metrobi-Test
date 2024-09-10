function checkOpeningClosing(string){

    const dictionary = [{
        opening: '[',
        closing: ']'
    },{
        opening: '{',
        closing: '}'
    },{
        opening: '(',
        closing: ')'
    }]

    let openingPile = [];
    let isValid = true;

    // If its even, meaning it's impossible to close out
    if(string.length % 2 != 0){
        return false;
    } else {
        for(let character of string){
            // If character is an opening
            if(dictionary.findIndex((item) => item.opening === character) != -1){
                openingPile.push(character)
            } else {
                // Its a closing character then lets check last character of the pile if the closing pair is equal to our Char its valid
                const lastOpening = openingPile.pop();
                if(character != (dictionary.find((item) => item.opening === lastOpening).closing)){
                    isValid= false;
                }
            }
        }
    }

    return isValid;
}

console.log(checkOpeningClosing("({[]})"));
console.log(checkOpeningClosing("{(])}"));
console.log(checkOpeningClosing("{([)]}"));
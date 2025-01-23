const palindromes = function (str) {

    let processedStr = '';

    for (char of str){

        if (!(char == ',' || char == ' ' || char == '!' || char == '.')){

            processedStr += char.toLowerCase();

        }

    }

    let palindrome = '';
    let len = processedStr.length

    for ( let i = 0; i < len; i++){

        palindrome += processedStr[len - i - 1];
        // console.log(palindrome);

    }
    return palindrome == processedStr;


};

console.log(palindromes('A car, a man, a maraca.'));


// Do not edit below this line
module.exports = palindromes;

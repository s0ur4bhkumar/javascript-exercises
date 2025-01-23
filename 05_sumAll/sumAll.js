const sumAll = function(value1,value2) {

    if (!Number.isInteger(value1) || !Number.isInteger(value2)) return 'ERROR';

    if (value1 < 0 || value2 < 0) return "ERROR";

    if (value1 > value2){

        temp = value1;
        value1 = value2;
        value2 = temp;

    }

    let result = 0;

    for (let i = value1; i <= value2; i++){

        result += i;

    }
    return result;


};

// sumAll(3,2);


// Do not edit below this line
module.exports = sumAll;

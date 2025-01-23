const repeatString = function(text,counter) {
    if (counter > 0){

        let result = '';
        for (let i = 0; i < counter; i++){
            result += text;
        }
        return result;

    }
    else if(counter == 0){
        return '';
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;

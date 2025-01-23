const removeFromArray = function(array,...theArgs) {

    for (ele of array){
        // console.log(`loop for element ${ele} \n`)
        // console.log(ele);
        for (arg of theArgs){
            // console.log(array, '\n');
            if (array.includes(arg)){

                // console.log(`the arg is ${arg}`,'\n');
                let removedElemnent = array.splice(array.indexOf(arg),1);
                // console.log(`element removed ${removedElemnent}`);
                // console.log(array);
            
            }
            
        }
    }
    return array;

    
};

// console.log(removeFromArray([1,2,2,3,3,4,5],2,3));


// Do not edit below this line
module.exports = removeFromArray;

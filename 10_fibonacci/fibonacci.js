const fibonacci = function(term) {
    parseInt(term);

    if (term < 0) return 'OOPS';
    if (term == 0) return 0;
    if (term == 1) return 1;

    let a = 0;
    let b = 1;
    let fibonacci_lst = [b]
    // console.log(a);
    // console.log(b)

    for (let i = 0; i <= term; i++){

        c = a + b;
        a = b;
        b = c;
        // console.log(fibonacci_lst);
        fibonacci_lst.push(c);
    }
    return fibonacci_lst[term - 1];

};

console.log(fibonacci('4'));

// Do not edit below this line
module.exports = fibonacci;

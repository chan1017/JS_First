/**
 * JS is a first-class function PL
 * It supports OOP and FP
 */

// functions are values
const f = (x) => x + 5;

function g(x){
    return x + 5;
}

console.log('f = ', f);
console.log('g = ', g);
console.log('hello CIS3500');
console.log('f(5) + 5 = ', f(5) + 5);
/**
 * impure function: 
 * pure function = no side effect
 * side effects: 
 * (1) Modifying a global variable initialized in the global scope 
 * (2) A function should not modify its parameters 
 * (3) Execute commands (print statements, file I/O, etc)
 *  */

let k = 6

function h(x){
    //impurity
    k = k + 4;
    x = x + 5;
    console.log('I am a side effect');
    console.log('h_pure(5,6) = ', h_pure(5,6));
    return x + k; // impure because it uses a value declared outside of its scope
}

function h_pure(x, y){
    const t = x + 5;
    return t + y;
}

/**
 * (1) Takes another function as input
 * (2) Returns a function as an output 
 * (3) If f is impure, then the entire function is impure
 */

function hofFunc(f, a, b) {
    return f(a, b); 
}
console.log('hofFunc((x, y) => x + y, 3, 2) = ', hofFunc((x, y) => x + y, 3, 2));

function hofFunc1(f, a, b) {
    function add(a, b) {
        return a + b; 
    }
    return (a, b) => a + b; 
}
console.log('hofFunc1(3, 2) = ', hofFunc1(3, 5));

/**
 * Arrays HOF
 * 
 * map
 */

// console.log('x = ', x);
// console.log('y = ', y);
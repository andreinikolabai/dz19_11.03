function adder() {
    let result = 0;

    return function(n){
        result += n;
        return result;
    }
}

let sum = adder();

console.log(`sum(3) = ${sum(3)}`);
console.log(`sum(5) = ${sum(5)}`);
console.log(`sum(20) = ${sum(20)}`);

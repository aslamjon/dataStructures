console.log(`=====================- Linear Time  O(n) -================================
|   /
|  /
| /_______`);
start = Date.now();

function sumUp(n) {
    result = 0;
    for (let i = 0; i <= n; i++) result += i;
    return result;
}
console.log(sumUp(7456123));

console.log(Date.now() - start, '- millSeconds');
console.log(`======================- Constant Time  O(1) -==============================
|
|_________
|__________`);

start = Date.now();

function sumUp2(n) {
    return (n / 2) * (1 + n); 
}
console.log(sumUp2(7456123)); 

console.log(Date.now() - start, '- millSeconds');
console.log(`======================- Logarthmic Time Complexity O(log n) -==============================
|
|  __-----
|/__________`);

console.log(`=========================- Ex.1 -===============================`);
function sumNumbers(numbers) {
    let result = 0; // 1
    for (let number of numbers) { // 1
        result += number; // 4 => n
    }
    return result; // 1
}
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n => O(n) => Linear Time Complexity
console.log(sumNumbers([1, 3, 10, 50]));





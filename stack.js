// https://www.youtube.com/watch?v=t2CEgPsws3U
console.log(`=================- Stack -=========================`);

var letters = [];
var word = 'racecar';
var rword = '';

// put letters of word into stack
for (var i = 0 ; i < word.length; i++)
    letters.push(word[i]);


// pop off the stack in reverse order
for (var i = 0 ; i < word.length; i++) 
    rword += letters.pop();

if (rword === word) 
    console.log(word + ' is a palindrome');
else 
    console.log(word + ' is not a palindrome');

console.log(`=================- Create a Stack -=========================`);
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
    // this.log = function() {
    //     return this.storage;
    // }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
// console.log(myStack.pop());
console.log(myStack.peek());

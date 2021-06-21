// https://www.youtube.com/watch?v=t2CEgPsws3U

/* 
    Stack haqaida tarif
    Stack malumot oxiridan qo'shiladi va oxiridan o'chiriladi
    yani Last in First out (LIFO)
    Stack Big O Notetion da O(1) hisoblanadi

    hayotiy misol:
    ustma ust qo'yilgan CD disklar ni misol qilish mumkin. 
    unga faqat ustidan disk qo'ysa bo'ladi va ustidan disk olib tashlanadi
    |  |
    |  |
    ----

    uning methodlari:
    push(item) - malumot qo'shadi
    pop() - malumotni o'chiradi va o'sha qiymatni qaytaradi
    peek() - oxirgi malumotni ko'rsatadi lekin o'chirmaydi
    count() - nechta malumot borligini ko'rsatadi
    clear() - hamma malumotni tozalaydi

*/ 

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

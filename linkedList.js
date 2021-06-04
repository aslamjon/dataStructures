// https://www.youtube.com/watch?v=41GSinwoMYA
// ======================-= A Custom Data Structure: Linked List -===============================
/* 
    Every element knowa about the next element
    This allows for efficint resizing and insertion at start and end of the list
*/
console.log(`==========- A Custom Data Structure: Linked List -==========`);
class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    append(value) {
        const newNode = {value: value, next: null};

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value: value, next: this.head };

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter (value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    find(value) {
        if(!this.head) {
            return;
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    delete(value) {
        if(!this.head) {
            return;
        }

        while (this.head && this.head.value == value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if ( this.tail.value === value) {
            this.tail = curNode;
        }
    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }

}
const linkedList1 = new LinkedList();

linkedList1.append(1);
linkedList1.append('Hello there');
linkedList1.append('Max');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('First value!')
linkedList1.prepend('First value!')

console.log(linkedList1.toArray());

linkedList1.delete('Max');
linkedList1.delete('First value!');
linkedList1.delete(18.51);

console.log(`===========================`,linkedList1.toArray());
console.log(linkedList1.find('Hello there'));
linkedList1.insertAfter('new value - 1', 1);
linkedList1.insertAfter('new value - 2', 'Hello there');
console.log(`===========================`,linkedList1.toArray());

// ======================-= Time Complexity & Bix O Notation -===============================
/*
                            Linked list     Arrays
Element Access                  O(n)           O(1)
Insertion at End          With tail: O(1)      O(1)
Insertion at Beginning          O(1)           O(n)
Insertion in Middle     Search time + O(1)     O(n)
Search Element                  O(n)           O(n)

*/
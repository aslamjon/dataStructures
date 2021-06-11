class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }
    add(value) {
        let node = new Node(value);
        if(!this.head) // if head dosen't has values;
            this.head = node;
        
            this.tail = node;
        if (this.tail) // if tail has value;
            this.tail.next = node;
        
        }
    toArray() {
        let arr = [];

        let temp = this.head;
        while (temp){
            arr.push(temp);
            temp = temp.next;
        }
        return arr;
    }
}
let linked = new LinkedList();
linked.add('hi');
linked.add('Hello Everyone');
linked.add('Aslamjon');
linked.add(25);
console.log(linked);
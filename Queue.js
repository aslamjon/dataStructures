// https://www.youtube.com/watch?v=t2CEgPsws3U
/* Queues haqaida tarif

    Queue ga yangi elementlar uning ortidan qo'shiladi.
    o'chirmoqchi bo'lsag uni boshidan o'chiradi.
    First in First out (FIFO) birinchi kirgan birnchi chiqadi
    
    Hayotiy misol: navbatlarda turishni misol qilish mumkin kim birinchi kelgan bo'lsa birinchi chiqadi
    
    Queue Big O Notetion da O(1) hisoblanadi

    Queue ning methodlari:
    Enqueue(item) - Orqasiga malumot qo'shadi
    Dequeue() - Boshidagi malumotni o'chiradi va uni qaytaradi
    Peek() - Boshidagi malumotni qaytaradi lekin uni o'chirmaydi
    Clear() - hamma malumotni o'chiradi
    Count() - queue da malumot qancha ekanligini ko'rsatadi

    Queue ni qachon foydalaniladi?
    bita narsadan bir nchta kishi  foydalansa masalan: local tarmoqda bita pirinter bor
    uni bir kishidan ko'proq odam ishlatsa printer queue ga saqlaydi va navbatma navbat ishni boshlaydi


*/

function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();


function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

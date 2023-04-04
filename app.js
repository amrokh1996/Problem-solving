// let Arr = [0, 1];
// let range = 20; 
// function fiboSeries(i) { 
    
//         var nextN = Arr[i-1] + Arr[i-2];
//         if(i<range){
//         Arr.push(nextN); 
//         fiboSeries(i+1)
//     }    
//     return Arr;
//   }
//   console.log(fiboSeries(2));


//   let arr2 = [1,2,3,4,5,6,7,8,9]
//   let sum = 0
//   function sumf(i){
//     if(i<arr2.length){
//         sum+=arr2[i]
//         sumf(i+1)
//     }
//     return sum
//   }
//   console.log(sumf(0))


// let string = "amro khaled ahmad alkhazaleh"
//   let newstring = "";

//   function rev(i){
//     if(i>=0){
//         newstring+=string[i]
//         rev(i-1)
//     }
//     return newstring ;
//   }

//   console.log(rev(string.length-1))





  function push(x) {
      if (s.length == 0) {
          s.unshift(x);
          return;
      }
      else if (x < s[0]) {
          s.pop()
          s.unshift(x);
      }
  }
let s = [];
push(3);
push(5);
push(7);
push(1);
push(9);
console.log("Minimum Element in the stack is: ", s[0])



//////////////////////////////////

let queue = [1,2,3,4,5,6];
console.log(queue)

let stack = [];
while (queue.length > 0) {
    stack.push(queue[0]);
    queue.shift();
}
while (stack.length > 0) {
    queue.push(stack[stack.length - 1]);
    stack.pop();
}

  console.log(queue)



//////////////////////////////



  let stack1 = [];
  let stack2 = [];

 
  function enqueue(element) {
      stack1.push(element);
      return stack1
  }

  
  function dequeue() {
      if (stack2.length === 0) {
          if (stack1.length === 0) {
              console.log(
          "queue is empty..");
          }
          while (stack1.length > 0) {
              let x = stack1.pop();
              stack2.push(x);
          }
          let result = stack2.pop()

          while (stack2.length > 0) {
            stack1.push(stack2.pop());
        }
      
      return result}
  }

  console.log("stack")
 enqueue(1);
 enqueue(2);
enqueue(3);

  console.log(dequeue());

  console.log(stack1)
  console.log(dequeue());

  console.log(stack1)

  



console.log("----------------linkedlistTask q1---------------")



  class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

     AddItem(item){
         let nodenew = new ListNode(item)
         let last = list.getLast()
         last.next = nodenew

     }
     delete(){
        let previous;
        let index = this.ListSize()
        let index2 = this.getFirst()
        index = Math.ceil(index/2)

        for(let x = 1;x<index;x++){
            previous = index2
            index2=index2.next
        }
        index = index2.next
        previous.next =index
     }

     reverse(){
        let stack=[]
        let p =list.head
        while(p){
             stack.push(p.data)
                 p=p.next
        }
        p =list.head
        while(p){
            p.data=stack.pop()
                p=p.next
       }

     }
     print(){
        let p =this.head
        while(p){
            console.log(p.data)
            p=p.next
        }
     }

    ListSize() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
let node6 = new ListNode(6)
let node7 = new ListNode(7)
let node8 = new ListNode(8)
let node9 = new ListNode(9)
node1.next = node2;
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node9



let list = new LinkedList(node1)


console.log("before modify")
list.print()

console.log("after modify")
list.delete()
list.print()

console.log("----------------linkedlistTask q2---------------")

list.reverse()
list.print()





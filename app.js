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
      }
      stack1=stack2
      return stack2.pop()
  }

  
  console.log(enqueue(1));
  console.log( enqueue(2));
  console.log(enqueue(3));

  console.log(dequeue());
  console.log(dequeue());

  console.log(stack1)

  



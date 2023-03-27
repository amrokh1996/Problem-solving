let Arr = [0, 1];
let range = 20; 
function fiboSeries(i) { 
    
        var nextN = Arr[i-1] + Arr[i-2];
        if(i<range){
        Arr.push(nextN); 
        fiboSeries(i+1)
    }    
    return Arr;
  }
  console.log(fiboSeries(2));


  let arr2 = [1,2,3,4,5,6,7,8,9]
  let sum = 0
  function sumf(i){
    if(i<arr2.length){
        sum+=arr2[i]
        sumf(i+1)
    }
    return sum
  }
  console.log(sumf(0))


let string = "amro khaled ahmad alkhazaleh"
  let newstring = "";

  function rev(i){
    if(i>=0){
        newstring+=string[i]
        rev(i-1)
    }
    return newstring ;
  }

  console.log(rev(string.length-1))

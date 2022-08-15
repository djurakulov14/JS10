
// 1

function min (a,b){
  if(typeof(a) == 'number'){
    return Math.min(a,b)
  }else if(typeof(a) == 'object' && !a[0]){
    return Math.min(a.a,a.b)
  }else {
    return Math.min.apply(Math, a)
  }
}

console.log(min([1, 2]));
console.log(min({a: 1, b: 2}));
console.log(min(1,2));
console.log(min({a: 1, b: 2}, {a: 11, b: 12}));


// 2
function procent (num1, num2){
    console.log(num1 / 100 * num2);
}
procent(150, 10)


//3

let arr = [43,23,675,764,123,1,54,34,0,94,6,54,35,2,4,3]

function bubble(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len ; i++) {
      for(let j = 0 ; j < len - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }


console.log(bubble(arr));


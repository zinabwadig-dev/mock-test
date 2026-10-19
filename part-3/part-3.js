// Part 3: JavaScript basics. Write your answers here and check them in the Console (or with node part-3.js).
console.log(10 === "10");   //false
console.log(typeof "7");  //string
console.log(3 > 2 && 5 < 4);  //false
console.log("Total: " + 2 + 3); //23


// 3.2 Fix the type bug (3 points) A fee was stored as text, so the total is wrong. We want to print Total: 13.

const tableFee = "10";
const guests = 3;

// console.log("Total: " + (tableFee + guests));
// we have wrong because tableFee is "" string

//  we have two soltions the first one is write before tableFree Number(),the second one is return "10" number as 10 
// console.log("Total: " + (Number(tableFee) + guests));
// template literal 
let total=`Total:${(Number(tableFee) + guests)}`;
console.log(total);

        // 3.3 Discount function (4 points)

function getDiscount(total){
    if(total >=100){
        return 10 
    }else if(total>=50 && total<100){
        return 5
    }
    else{
        return 0
    }
}

        // 3.4 Array of objects (4 points) 
let dishes=[
{ name: "Apple", price: 25 },
{ name: "Orange", price: 60 },
];
dishes.push({ name: "Milk", price: 10 });
console.log(dishes);
console.log(dishes.length);

  for (let i = 0; i < dishes[i].length; i++) {
    
  }


        // 3.5 Trace the code (3 points, 1 each)

  function check(age, hasTicket) {
  if (age < 12) {
    return "free";
  }
  if (hasTicket) {
    return "welcome";
  }
  return "buy a ticket";
}

console.log(check(8, false));       //free  
console.log(check(30, true));      //welcome
console.log(check(30, false));    //buy a ticket


            // 3.6 Debug it (2 points) 
let count = 0;

function addGuest() {
  count +=1;
}

addGuest();
console.log(count);

// we must write count +=1 it's(count=count+1) we add 1 to old value count (=0)
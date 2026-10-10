// FOR LOOP
// for(initialization; condition; update){

// }
for(let count=1; count<=5; count++){
    console.log("Iteration/loop", count);
    
}

//Addition of even numbers btw 1 to 100
sum=0
for (let i=1; i<=100; i++){
    if(i%2===0){
      //  console.log(i);
      sum+=i
      
    }
    
}
console.log("sum is equal to" + sum);


let language = "Javascript"
for(let i=0; i<=language.length; i++){
    console.log(language.charAt(i));
    
}

// Nested loop

for(let i=1; i<=3; i++){
for(let j=1; j<=3; j++){
console.log("Row", i, "col", j);
}
}

// Break and Continue
for(let a=1; a<=3; a++){
    if(a===3){
        break;
    }
    console.log(a);
    
}
// Continue
for(let b=1; b<=5; b++){
    if(b===3) continue
    console.log(b)
        
}

// Multiple COUNTERS FOR SINGLE LOOP

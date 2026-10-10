// console.log(0==false);
// let age= 23;
// console.log(age>=60 ? "Senior citizen" :"Junoir citizen");
let catchingBus= true; 
if (catchingBus){
    console.log("I will Reach home on time");
} else {
    console.log("I will be late to reach");
    
}
let score=85
let grade;
if (score<0 || score> 100){
    console.log("Invalid score");
    
} else {
    if (score>=90 && score>=100){
        grade="A";
        
    } else if (score>=80){
        grade="B";

    }else if (score>=70){
        grade="C";
        
    }else if (score>=60){
        grade="D";

    }else if (score>=50){
        grade ="E";

    }else {
        grade="F";

    }
}
console.log("Score: " + score);
console.log("Grade: " + grade)

let status=(score>=50) ? "Passed": "Failed"
console.log("Status: "+ status);



let Balance=50000;
let withdrawalAmount= 10000;
let pin= 1234;
let enteredPin= 1234; 
console.log("Executing tranaction");
if (pin===enteredPin){
    if (withdrawalAmount > Balance){
        console.log("Insuffient Balance");
        
}else{
    Balance-=withdrawalAmount
 console.log("Transaction Successfull");
 console.log("Remaining balance: "+ Balance);
}
 
}else{
    console.log("Incorrect Pin");
    
}
 Balance= 50000;
 let selectedOption=1;
 switch (selectedOption){
    case 1:
        console.log("Your current balance is: " + Balance);
        break;
    case 2:
        console.log("Withdraw Money");
        if (withdrawalAmount>Balance){
            console.log("insuffient Balance");
            
        }else{
            Balance-=withdrawalAmount
            console.log("Please take your cash. Remaining Balance: "+ Balance);
        }
            break;

        case 3:
            let DepositAmount=5000;
            Balance+=DepositAmount;
            console.log("Deposited: "+ DepositAmount+ " New Amount: " + Balance);
    break;
        case 4:
            console.log("Thank you for using the Atm. Exit successful.");
            break;
            default:
                console.log("Invalid menu option selected.");
                
        }
 
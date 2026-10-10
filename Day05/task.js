// STUDENT DATA
const students = [
  { name: "Victor", age: 20, score: 75, paid: true },
  { name: "David", age: 17, score: 82, paid: true },
  { name: "Sarah", age: 22, score: 45, paid: true },
  { name: "Daniel", age: 25, score: 90, paid: false },
  { name: "Grace", age: 19, score: 65, paid: true }
];

// TASK 1: DISPLAY ALL STUDENTS
function displayStudents() {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const paymentStatus = student.paid ? "Yes" : "No"; 
    
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Score: ${student.score}`);
    console.log(`Paid: ${paymentStatus}`);
    console.log("-------------------");
  }
}

// TASK 2: CHECK STUDENT ELIGIBILITY
function checkEligibility(student) {
  if (student.age >= 18 && student.score >= 50 && student.paid === true) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

// TASK 3: FIND ELIGIBLE STUDENTS
function getEligibleStudents() {
  const eligibleList = [];
  for (let i = 0; i < students.length; i++) {
    if (checkEligibility(students[i]) === "Eligible") {
      eligibleList.push(students[i]);
    }
  }
  return eligibleList;
}

// TASK 4: COUNT ELIGIBLE STUDENTS
function countEligibleStudents() {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (checkEligibility(students[i]) === "Eligible") {
      count++;
    }
  }
  return count;
}

// TASK 5: CALCULATE THE AVERAGE SCORE
function calculateAverageScore() {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  const average = totalScore / students.length;
  return average;
}

// TASK 6: GENERATE A STUDENT REPORT
function getStudentReport() {
  console.log("===== STUDENT REPORT =====");
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const status = checkEligibility(student);
    console.log(`${student.name} - ${status}`);
  }
  
  console.log("==========================");
  console.log(`Eligible Students: ${countEligibleStudents()}`);
  console.log(`Average Score: ${calculateAverageScore().toFixed(1)}`);
}

// BONUS CHALLENGE
function getStudentByName(name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === name.toLowerCase()) {
      return students[i];
    }
  }
  return "Student not found";
}


// TESTING THE FUNCTIONS (Verification)

console.log("--- Executing Task 1: displayStudents() ---");
displayStudents();

console.log("\n--- Executing Task 2: checkEligibility() ---");
console.log(checkEligibility(students[0])); // Expected: Eligible

console.log("\n--- Executing Task 6: getStudentReport() ---");
getStudentReport();

console.log("\n--- Executing Bonus Challenge: getStudentByName() ---");
console.log(getStudentByName("Victor"));
console.log(getStudentByName("Alex"));
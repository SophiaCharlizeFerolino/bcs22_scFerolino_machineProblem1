//ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program: Computation of Grades using Function
    Programmer: Sophia Charlize S. Ferolino
    Section: BCS22
    Start Date: April 17, 2023
    End Date: April 20, 2023
*/

let studentInfo = [];
 
for (let i = 0; i < 5; i++) {
  let enablingAssessment = [];
  let summativeAssessment = [];
 
  let studentName = prompt("Enter the name of the student: ");
 
  for (let j = 0; j < 5; j++) {
    let userInput = parseInt(prompt(`Enter enabling assessment ${j + 1}: `));
 
    // check if enabling assessment score entered by user is between 0 and 100
    while (userInput < 0 || userInput > 100) {
      userInput = parseInt(prompt("Please input score between 0 and 100 only. Enter enabling assessment: "));
    }
 
    enablingAssessment.push(userInput);
  }
 
  for (let k = 0; k < 3; k++) {
    let userInput = parseInt(prompt(`Enter summative assessment ${k + 1}: `));
 
    // check if summative assessment score entered by user is between 0 and 100
    while (userInput < 0 || userInput > 100) {
      userInput = parseInt(prompt("Please input score between 0 and 100 only. Enter summative assessment: "));
    }
 
    summativeAssessment.push(userInput);
  }
 
  let finalExamination = parseInt(prompt("Enter major exam grade: "));
 
  // check if final examination score entered by user is between 0 and 100
  while (finalExamination < 0 || finalExamination > 100) {
    finalExamination = parseInt(prompt("Please input score between 0 and 100 only. Enter major exam grade: "));
  }
 
  let classParticipation = enablingAssessment.reduce((a, b) => a + b) / enablingAssessment.length;
  let summativeGrade = summativeAssessment.reduce((a, b) => a + b) / summativeAssessment.length;
  let gradeScore = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExamination * 0.4);
 
  let letterGrade = getLetter(gradeScore);
 
  studentInfo.push({
    "Name of Student": studentName,
    "Class Participation": classParticipation.toFixed(2),
    "Summative Assessment": summativeGrade.toFixed(2),
    "Exam Grade": finalExamination.toFixed(2),
    "Grade Score": gradeScore.toFixed(2),
    "Letter Grade": letterGrade,
  });
 
}

console.table(studentInfo);
 
function getLetter(gradeScore) {
  if (gradeScore >= 90) {
    return "A";
  } else if (gradeScore >= 80 && gradeScore < 90) {
    return "B";
  } else if (gradeScore >= 70 && gradeScore < 80) {
    return "C";
  } else if (gradeScore >= 60 && gradeScore < 70) {
    return "D";
  } else {
    return "F";
  }
}
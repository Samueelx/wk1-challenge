function firstChallenge() {
    let grade;
    const marks = parseInt(prompt("Please input the student's marks: "));
    if(marks > 100)
    alert("The input should be between 0 and 100. Please try again.");
    if(!Number.isInteger(marks))
    alert("Your input should be an integer.");

    if(marks > 79 && marks < 101){
        grade = 'A';
        alert(`The student's grade is: ${grade}`);
    } else if(marks >= 60 && marks < 80) {
        grade = 'B';
        alert(`The student's grade is: ${grade}`);
    } else if(marks > 49 && marks <= 59) {
        grade = 'C';
        alert(`The student's grade is: ${grade}`);
    } else if(marks >= 40 && marks <= 49) {
        grade = 'D';
        alert(`The student grade is: ${grade}`);
    }
    else if(marks < 40){
        grade = 'E';
        alert(`The student grade is: ${grade}`);
    }
}
const first = document.getElementById('first');
first.addEventListener('click', firstChallenge);
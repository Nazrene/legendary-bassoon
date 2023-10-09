function calculateGrade(mark) {
    if (mark > 79 && mark <= 100)  {
        return 'A';
    }else if (mark >= 60 && mark <= 79) {
        return 'B';
    }else if (mark >= 50 && mark <= 59) {
        return 'C';
    }else if (mark >= 40 && mark <= 49) {
        return 'D';
    }else if (mark < 40 && mark >= 0) {
        return 'E';
    }else {
        return 'Invalid Input. Mark should be between 0 and 100.';
    }
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout  
});

readline.question('Enter student mark(0 - 100):' ,(mark) => {
    const grade = calculateGrade(Number(mark));
    console.log(`Grade: ${grade}`);
    readline.close();
});
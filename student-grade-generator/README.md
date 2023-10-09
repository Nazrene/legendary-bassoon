# Student Grade Calculator

The **Student Grade Calculator** is a simple JavaScript program that calculates and displays the corresponding grade for a student's mark input. It takes user input for a student's mark, which should be a number between 0 and 100, and then calculates and outputs the corresponding grade.

## How It Works

The program works as follows:

1. It defines a function called `calculateGrade(mark)` that takes a single argument, `mark`, which represents the student's mark.

2. Inside the `calculateGrade` function, it uses conditional statements (`if-else if`) to determine the grade based on the value of `mark`. The grading criteria are as follows:
   - A: Marks greater than 79 and less than or equal to 100.
   - B: Marks between 60 and 79 (inclusive).
   - C: Marks between 50 and 59 (inclusive).
   - D: Marks between 40 and 49 (inclusive).
   - E: Marks less than 40 and greater than or equal to 0.
   - Invalid: If the input mark is outside the range of 0 to 100, an "Invalid input" message is displayed.

3. The program uses `readline` to take user input from the command line. It creates an interface to handle input and output.

4. The user is prompted to enter a student's mark with the message "Enter student mark (0-100):".

5. Once the user enters the mark, it is converted to a number using `Number(mark)`.

6. The `calculateGrade` function is called with the input mark, and the calculated grade is stored in the `grade` variable.

7. The program displays the calculated grade using `console.log` with the message "Grade: {grade}".

8. Finally, the `readline` interface is closed, and the program stops running.


## Example

Here's an example of how the program works:

```
Enter student mark (0-100): 85
Grade: A
```
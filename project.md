# Quiz Score Calculator

Score a quiz by matching each question with the answer the user gave. The final result should include the count, total, percentage, and a simple message.

Write these functions:

- `isAnswerCorrect(question, userAnswer)` should return true when the user's answer matches the correct answer.
- `countCorrectAnswers(questions, userAnswers)` should match each question with its user answer and return the number correct.
- `calculatePercentage(correctCount, totalQuestions)` should return the percentage score.
- `getResultMessage(percentage)` should return a short message based on the percentage.
- `createQuizResult(questions, userAnswers)` should return correctCount, totalQuestions, percentage, and message.

Sample checks:
const questions = [
{ id: 1, correctAnswer: 'B' },
{ id: 2, correctAnswer: 'A' },
{ id: 3, correctAnswer: 'D' },
{ id: 4, correctAnswer: 'C' },
];

const userAnswers = [
{ questionId: 1, answer: 'B' },
{ questionId: 2, answer: 'C' },
{ questionId: 3, answer: 'D' },
{ questionId: 4, answer: 'C' },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));

Expected output:
{ correctCount: 3, totalQuestions: 4, percentage: 75, message: "You passed" }
3
75
{ correctCount: 1, totalQuestions: 4, percentage: 25, message: "Keep practicing" }

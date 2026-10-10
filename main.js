function isAnswerCorrect(question, userAnswer) {
  if (!userAnswer) {
    return false;
  }

  return question.correctAnswer === userAnswer.answer;
}

function countCorrectAnswers(questions, userAnswers) {
  let correct = 0;
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];

    // mencari jawaban user yang memiliki questionId yang sama dengan id soal
    const userAnswer = userAnswers.find(
      (user) => user.questionId === currentQuestion.id,
    );

    // cek jawaban user
    if (isAnswerCorrect(currentQuestion, userAnswer)) {
      correct++;
    }
  }

  return correct;
}

function calculatePercentage(correctCount, totalQuestion) {
  return (correctCount / totalQuestion) * 100;
}

function getResultMessage(percentage) {
  return percentage > 50 ? "You passed" : "Keep practicing";
}

function createQuizResult(questions, userAnswer) {
  let correctAnswer = countCorrectAnswers(questions, userAnswer);
  let totalQuestion = questions.length;

  let percentageUser = calculatePercentage(correctAnswer, totalQuestion);
  let messageUser = getResultMessage(percentageUser);

  return {
    correctCount: correctAnswer,
    totalQuestions: totalQuestion,
    percentage: percentageUser,
    message: messageUser,
  };
}

const questions = [
  { id: 1, correctAnswer: "B" },
  { id: 2, correctAnswer: "A" },
  { id: 3, correctAnswer: "D" },
  { id: 4, correctAnswer: "C" },
];
const userAnswers = [
  { questionId: 1, answer: "B" },
  { questionId: 2, answer: "C" },
  { questionId: 3, answer: "D" },
  { questionId: 4, answer: "C" },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));
const partialAnswers = [{ questionId: 1, answer: "B" }];
console.log(createQuizResult(questions, partialAnswers));

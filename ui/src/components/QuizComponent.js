import React from "react";
import Quiz from "react-quiz-component";

const QuizComponent = () => {
  const quiz = {
    quizTitle: "Article Quiz",
    questions: [
      {
        question: "ReactJS is developed by _____?",
        questionType: "text",
        answerSelectionType: "single",
        answers: ["Google Engineers", "Facebook Engineers"],
        correctAnswer: "2",
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      },
      {
        question: "ReactJS is an MVC based framework?",
        questionType: "text",
        answerSelectionType: "single",
        answers: ["True", "False"],
        correctAnswer: "2",
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      },
    ],
  };

  return (
    <div>
      <Quiz quiz={quiz} />
    </div>
  );
};
export default QuizComponent;

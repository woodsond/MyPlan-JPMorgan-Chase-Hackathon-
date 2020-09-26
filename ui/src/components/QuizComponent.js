import React from 'react';
import Quiz from 'react-quiz-component';

const QuizComponent = () => {
    const quiz = {
        "quizTitle": "Article Quiz",
        "questions":[
            {
                "question": "What impact Finance _____?",
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                "Google Engineers",
                "COVID-19"
                ],
                "correctAnswer": "2",
                "messageForCorrectAnswer": "Correct answer. Good job.",
                "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
          },
          {
            "question": "Is Finance impacted by Coid",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "True",
              "False"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
          },
        ]
    }
        
    
    return(
        <div>
            <Quiz quiz={quiz} />
        </div>
    );
}
export default QuizComponent;
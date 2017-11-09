import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================


const GraphTitle = ({
    state
}) => {
    if (state.isSubmittedAnswerCorrect) {
        return (
            <div className="answer">Good job. You chose the correct answer.</div>
        )
    } else {
        return (
            <div className="answer">{`Sorry, the correct answer is ${state.randomQuestion.correct_answer.toUpperCase()}.  You chose ${state.selectedAnswer.answer.toUpperCase()}.`}</div>
        )
    }

};

export default GraphTitle;
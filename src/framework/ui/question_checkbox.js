import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

const QuestionCheckbox = ({ group, data, onClick}) => {

    return (
        <div className="question-checkbox-frame">
            <div className="letter">{ data.letter }</div>
            <input className="radio" value={ data.letter } name={ group } type="radio" onClick={onClick}/>
            <div className="answer">{ data.answer }</div>
        </div>
    );
};


QuestionCheckbox.defaultProps = {
    data: null,
    group: null,
    onClick: null
};


export default QuestionCheckbox;
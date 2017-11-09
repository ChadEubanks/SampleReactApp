import React from 'react';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import teslaIcon from '../../theme/images/tesla_icon.png';
import QuestionCheckbox from './question_checkbox.js';
import ListView from '../../framework/ui/list.js';
import Store from '../../application/middleware/store/core.js';
import QuestionsActions from '../../application/middleware/redux/actions/questions.js';

const Question = ({
    state, randomQuestion, icon, iconAlt, mode
}) => {

    if (mode === 'saving') {
        return (
            <div className="question-view">
                <div className="top-bar" />
                <div className="icon-frame" >
                    <img className="icon" src={ icon } alt={ iconAlt } />
                </div>
                <div className="view-title"><span>Question</span></div>
                <div className="question-frame">
                    <div className="question">Saving Answer</div>
                </div>
            </div>
        )
    } else if (!randomQuestion) {
        return false;
    } else {
        return (
            <div className="question-view">
                <div className="top-bar" />
                <div className="icon-frame" >
                    <img className="icon" src={ icon } alt={ iconAlt } />
                </div>
                <div className="view-title"><span>Question</span></div>
                <div className="question-frame">
                    <div className="question">{randomQuestion.title}</div>
                    <ListView data={randomQuestion.answers}>
                        <QuestionCheckbox group="question" onClick={(sender) => (Store.dispatch(QuestionsActions.didSelectAnswer(sender)))}/>
                    </ListView>
                    <button className="button" onClick={() => (Store.dispatch(QuestionsActions.didSelectSubmit(state)))}>Submit</button>
                </div>
            </div>
        );
    }
};


Question.defaultProps = {
    state: null,
    randomQuestion: null,
    icon: teslaIcon,
    iconAlt: 'Tesla Inc icon',
    mode: ''
};


export default Question;
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import Answer from '../../framework/ui/answer.js';
import Store from '../middleware/store/core.js';
import QuestionsActions from '../middleware/redux/actions/questions.js';

class AnswerView extends React.Component {

    componentWillMount() {
        const { questionsState } = this.props;

        if (questionsState.isHotReload) {
            this.props.history.push('/question');
        } else {
            const isSubmittedAnswerCorrect = questionsState.selectedAnswer.answer === questionsState.randomQuestion.correct_answer;
            Store.dispatch(QuestionsActions.isSubmittedAnswerCorrect(isSubmittedAnswerCorrect));
        }
    }

    componentWillUnmount() {
        Store.dispatch(QuestionsActions.resetQuestionsState());
    }

    render() {
        const { questionsState } = this.props;

        if (questionsState.isHotReload) {
           return false;
        }

        return (
            <Answer state={questionsState} history={this.props.history} />
        )
    }

};

const mapStateToProps = state => ({
    applicationState: state.ApplicationReducer,
    questionsState: state.QuestionReducer
});

export default withRouter(connect(mapStateToProps)(AnswerView));
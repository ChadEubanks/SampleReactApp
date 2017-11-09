import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import Question from '../../framework/ui/question.js';
import Store from '../middleware/store/core.js';
import QuestionsActions from '../middleware/redux/actions/questions.js';

const fetchQuestions = () => {
    Store.dispatch(QuestionsActions.fetchQuestions());
};

const setRandomQuestion = (data) => {
    if (data.length < 1) {return};
    let index = Math.floor(Math.random() * (data.length - 1) + 1);
    Store.dispatch(QuestionsActions.setRandomQuestion(data[index]));
}

class QuestionView extends React.Component {

    componentDidMount() {
        const { questionsState } = this.props;

        if (questionsState.data.length < 1) {
            fetchQuestions()
        } else {
            setRandomQuestion(questionsState.data);
        }
    }

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (currentProps.questionsState.data.length !== nextProps.questionsState.data.length) {
            setRandomQuestion(nextProps.questionsState.data);
        }

        if (currentProps.questionsState.answerStatistics.length !== nextProps.questionsState.answerStatistics.length && nextProps.questionsState.answerStatistics.length > 0) {
            this.props.history.push(`question/${nextProps.questionsState.answerStatistics[0].question_uuid}/answer`);
        }
    }

    render() {
        const { questionsState } = this.props;
        return (
            <Question state={questionsState} randomQuestion={questionsState.randomQuestion} />
        )
    }

};

const mapStateToProps = state => ({
    applicationState: state.ApplicationReducer,
    questionsState: state.QuestionReducer
});

export default withRouter(connect(mapStateToProps)(QuestionView));
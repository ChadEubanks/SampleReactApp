// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_FAIL,
    FETCH_QUESTIONS_SUCCESS,
    DID_SELECT_ANSWER,
    DID_SELECT_SUBMIT,
    DID_SELECT_SUBMIT_SUCCESS,
    DID_SELECT_SUBMIT_FAIL,
    SET_RANDOM_QUESTION,
    IS_SUBMITTED_ANSWER_CORRECT,
    RESET_QUESTIONS_STATE
} from '../actions/questions.js';

const INITIAL_STATE = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const QuestionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return Object.assign({}, state, { isHotReload: false, isLoading: true });
        case FETCH_QUESTIONS_FAIL:
            return Object.assign({}, state, { isLoading: false, errorMessage: 'Oh no, something went wrong.'});
        case FETCH_QUESTIONS_SUCCESS:
            return Object.assign({}, state, { isLoading: false, data: action.payload });
        case DID_SELECT_ANSWER:
            return Object.assign({}, state, { submitIsEnabled: true, selectedAnswer: action.payload });
        case DID_SELECT_SUBMIT:
            return Object.assign({}, state, { isLoading: true, selectedAnswer: action.payload });
        case DID_SELECT_SUBMIT_SUCCESS:
            return Object.assign({}, state, { isLoading: false, answerStatistics: action.payload });
        case DID_SELECT_SUBMIT_FAIL:
            return Object.assign({}, state, { isLoading: false, errorMessage: 'Oh no, something went wrong.'});
        case SET_RANDOM_QUESTION:
            return Object.assign({}, state, { randomQuestion: action.payload });
        case RESET_QUESTIONS_STATE:
            return Object.assign({}, state, { isLoading: false, errorMessage: '', randomQuestion: '', selectedAnswer: '', submitIsEnabled: false, isSubmittedAnswerCorrect: false, answerStatistics: [] });
        case IS_SUBMITTED_ANSWER_CORRECT:
            return Object.assign({}, state, {isSubmittedAnswerCorrect: action.payload});
            default:
            return state;
    }
};

export default QuestionReducer;

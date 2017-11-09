// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import QuestionsActions, {
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
} from '../../../../../application/middleware/redux/actions/questions.js';

describe('Redux Questions Actions Tests', () => {

    test('should create an action fetchQuestions', () => {
        const expectedAction = {
            type: FETCH_QUESTIONS
        };

        expect(QuestionsActions.fetchQuestions()).toEqual(expectedAction);
    });

    test('should create an action fetchQuestionsFail', () => {
        const error = {message: 'Something went wrong'};

        const expectedAction = {
            type: FETCH_QUESTIONS_FAIL,
            payload: error
        };

        expect(QuestionsActions.fetchQuestionsFail(error)).toEqual(expectedAction);
    });

    test('should create an action fetchQuestionsSuccess', () => {
        const payload = [{id: 1}, {id: 2}];

        const expectedAction = {
            type: FETCH_QUESTIONS_SUCCESS,
            payload
        };

        expect(QuestionsActions.fetchQuestionsSuccess(payload)).toEqual(expectedAction);
    });

    test('should create an action didSelectAnswer', () => {
        const payload = {target: {value: 'a'}};

        const expectedAction = {
            type: DID_SELECT_ANSWER,
            payload: payload.target.value
        };

        expect(QuestionsActions.didSelectAnswer(payload)).toEqual(expectedAction);
    });

    test('should create an action didSelectSubmit', () => {
        const payload = {randomQuestion: {question_uuid: 1}, selectedAnswer: 'a'};

        const expectedAction = {
            type: DID_SELECT_SUBMIT,
            payload: {question_uuid: payload.randomQuestion.question_uuid, answer: payload.selectedAnswer}
        };

        expect(QuestionsActions.didSelectSubmit(payload)).toEqual(expectedAction);
    });

    test('should create an action didSelectSubmitSuccess', () => {
        const payload = [{id: 1}, {id: 2}];

        const expectedAction = {
            type: DID_SELECT_SUBMIT_SUCCESS,
            payload
        };

        expect(QuestionsActions.didSelectSubmitSuccess(payload)).toEqual(expectedAction);
    });

    test('should create an action didSelectSubmitFail', () => {
        const error = {message: 'Something went wrong'};

        const expectedAction = {
            type: DID_SELECT_SUBMIT_FAIL,
            payload: error
        };

        expect(QuestionsActions.didSelectSubmitFail(error)).toEqual(expectedAction);
    });

    test('should create an action setRandomQuestion', () => {
        const payload = {id: 1};

        const expectedAction = {
            type: SET_RANDOM_QUESTION,
            payload
        };

        expect(QuestionsActions.setRandomQuestion(payload)).toEqual(expectedAction);
    });

    test('should create an action isSubmittedAnswerCorrect', () => {
        const payload = true;

        const expectedAction = {
            type: IS_SUBMITTED_ANSWER_CORRECT,
            payload
        };

        expect(QuestionsActions.isSubmittedAnswerCorrect(payload)).toEqual(expectedAction);
    });

    test('should create an action resetQuestionsState', () => {

        const expectedAction = {
            type: RESET_QUESTIONS_STATE
        };

        expect(QuestionsActions.resetQuestionsState()).toEqual(expectedAction);
    });

});
// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_QUESTIONS_FAIL = 'FETCH_QUESTIONS_FAIL';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const DID_SELECT_ANSWER = 'DID_SELECT_ANSWER';
export const DID_SELECT_SUBMIT = 'DID_SELECT_SUBMIT';
export const DID_SELECT_SUBMIT_SUCCESS = 'DID_SELECT_SUBMIT_SUCCESS';
export const DID_SELECT_SUBMIT_FAIL = 'DID_SELECT_SUBMIT_FAIL';
export const SET_RANDOM_QUESTION = 'SET_RANDOM_QUESTION';
export const IS_SUBMITTED_ANSWER_CORRECT = 'IS_SUBMITTED_ANSWER_CORRECT';
export const RESET_QUESTIONS_STATE = 'RESET_QUESTIONS_STATE';

export default class QuestionsActions {

    static fetchQuestions() {
        return {
            type: FETCH_QUESTIONS
        }
    }

    static fetchQuestionsFail(error) {
        return {
            type: FETCH_QUESTIONS_FAIL,
            payload: error
        }
    }

    static fetchQuestionsSuccess(payload) {
        return {
            type: FETCH_QUESTIONS_SUCCESS,
            payload
        }
    }

    static didSelectAnswer(payload) {
        return {
            type: DID_SELECT_ANSWER,
            payload: payload.target.value
        }
    }

    static didSelectSubmit(payload) {
        return {
            type: DID_SELECT_SUBMIT,
            payload: {question_uuid: payload.randomQuestion.question_uuid, answer: payload.selectedAnswer}
        }
    }

    static didSelectSubmitSuccess(payload) {
        return {
            type: DID_SELECT_SUBMIT_SUCCESS,
            payload
        }
    }

    static didSelectSubmitFail(error) {
        return {
            type: DID_SELECT_SUBMIT_FAIL,
            payload: error
        }
    }

    static setRandomQuestion(payload) {
        return {
            type: SET_RANDOM_QUESTION,
            payload
        }
    }

    static isSubmittedAnswerCorrect(payload) {
        return {
            type: IS_SUBMITTED_ANSWER_CORRECT,
            payload
        }
    }

    static resetQuestionsState() {
        return {
            type: RESET_QUESTIONS_STATE
        }
    }

};
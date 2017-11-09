import { call, put } from 'redux-saga/effects';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import { saveAnswer, fetchQuestions } from '../../../../application/middleware/saga/question.js';
import QuestionsActions from '../../../../application/middleware/redux/actions/questions.js';
import NetworkApi from '../../../../application/middleware/saga/utils/network_api.js';
import Request from '../../../../framework/datalayer/request.js';

describe('Saga: Questions - fetchQuestions', () => {
    const generator = fetchQuestions();

    // expects a call instruction
    test('should yield on Effect call(fetchQuestions)', () => {
        expect(generator.next().value).toEqual(call(Request.read, NetworkApi.QUESTIONS_URL()));
    });

    // create a fake response
    const response = {};
    // expects a dispatch instruction
    test('fetchQuestions should yield an Effect put({type: FETCH_QUESTIONS_SUCCESS, payload})', () => {
        expect(generator.next(response).value).toEqual(put(QuestionsActions.fetchQuestionsSuccess(response)));
    });

    // create a fake error
    const error = {};
    // expects a dispatch instruction
    test('fetchQuestions should yield an Effect put({type: FETCH_QUESTIONS_FAIL, error})', () => {
        expect(generator.throw(error).value).toEqual(put(QuestionsActions.fetchQuestionsFail(error)));
    });

});

describe('Saga: Questions - saveAnswer', () => {
    const action = { payload: 'a' };
    const generator = saveAnswer(action);

    // expects a call instruction
    test('should yield on Effect call(saveAnswer)', () => {
        expect(generator.next().value).toEqual(call(Request.create, NetworkApi.ANSWERS_URL(), JSON.stringify(action.payload)));
    });

    // create a fake response
    const response = {};
    // expects a dispatch instruction
    test('saveAnswer should yield an Effect put({type: DID_SELECT_SUBMIT_SUCCESS, payload})', () => {
        expect(generator.next(response).value).toEqual(put(QuestionsActions.didSelectSubmitSuccess(response)));
    });

    // create a fake error
    const error = {};
    // expects a dispatch instruction
    test('saveAnswer should yield an Effect put({type: DID_SELECT_SUBMIT_FAIL, error})', () => {
        expect(generator.throw(error).value).toEqual(put(QuestionsActions.didSelectSubmitFail(error)));
    });

});

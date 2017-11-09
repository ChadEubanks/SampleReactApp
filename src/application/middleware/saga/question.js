import { call, put, takeLatest } from 'redux-saga/effects';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import QuestionsActions, {
    FETCH_QUESTIONS,
    DID_SELECT_SUBMIT
} from '../redux/actions/questions.js';
import NetworkApi from './utils/network_api.js';
import Request from '../../../framework/datalayer/request.js';

// generator //
export function* fetchQuestions() {
    try {
        const response = yield call(Request.read, NetworkApi.QUESTIONS_URL());
        if (response instanceof Error) {
            yield put(QuestionsActions.fetchQuestionsFail(response));
        } else {
            yield put(QuestionsActions.fetchQuestionsSuccess(response));
        }
    } catch (error) {
        yield put(QuestionsActions.fetchQuestionsFail(error));
    }
}

export function* saveAnswer(action) {
    try {
        const response = yield call(Request.create, NetworkApi.ANSWERS_URL(), JSON.stringify(action.payload));
        if (response instanceof Error) {
            yield put(QuestionsActions.didSelectSubmitFail(response));
        } else {
            yield put(QuestionsActions.didSelectSubmitSuccess(response));
        }
    } catch (error) {
        yield put(QuestionsActions.didSelectSubmitFail(error));
    }
}

// watcher //
export function* watchFetchQuestions() {
    yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
    yield takeLatest(DID_SELECT_SUBMIT, saveAnswer)
}

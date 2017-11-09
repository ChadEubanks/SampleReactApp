import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import { watchFetchQuestions } from './question.js';

export const SagaMiddleware = createSagaMiddleware();

export const rootSaga = function* rootSaga() {
    yield all([
        watchFetchQuestions()
    ]);
};
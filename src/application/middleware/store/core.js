import { applyMiddleware, createStore } from 'redux';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import Reducer from '../redux/core.js';
import { SagaMiddleware, rootSaga } from '../saga/core.js';

const debugMode = false;

// create store //
const Store = createStore(
    Reducer,
    applyMiddleware(SagaMiddleware)
);

// start saga middleware //
SagaMiddleware.run(rootSaga);

// used for debugging //
Store.subscribe(() => {
    if (debugMode) { console.log('store changed', Store.getState()); }
});

export default Store;


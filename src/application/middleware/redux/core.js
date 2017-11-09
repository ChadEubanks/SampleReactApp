import { combineReducers } from 'redux';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import ApplicationReducer from './reducers/application.js';
import QuestionReducer from './reducers/questions.js';

const Reducer = combineReducers({
    ApplicationReducer,
    QuestionReducer
});

export default Reducer;
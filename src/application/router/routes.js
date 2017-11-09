import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import Store from '../middleware/store/core.js';
import IntroView from '../views/intro_view.js';
import QuestionView from '../views/question_view.js';
import AnswerView from '../views/answer_view.js';

const ApplicationRoutes = () => (
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ IntroView }/>
                <Route exact path="/question"  component={ QuestionView }/>
                <Route exact path="/question/:id/answer" component={ AnswerView } />
            </div>
        </BrowserRouter>
    </Provider>
);
export default ApplicationRoutes;

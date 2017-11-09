// ==========================================================================
// Authors:   Chad Eubanks
// ==========================================================================

import LocalizationStrings from '../../../localization/en/strings.js';

const INITIAL_APPLICATION_STATE = {
    locStrings: LocalizationStrings,
    locLanguage: 'EN'
};

const ApplicationReducer = (state = INITIAL_APPLICATION_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default ApplicationReducer;

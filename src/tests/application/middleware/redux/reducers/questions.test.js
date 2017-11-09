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
import QuestionReducer from '../../../../../application/middleware/redux/reducers/questions.js';

const mockInitialState = {
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

const mockFetchQuestions = {
    isHotReload: false,
    isLoading: true,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockFetchQuestionsFail = {
    isHotReload: true,
    isLoading: false,
    errorMessage: 'Oh no, something went wrong.',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockFetchQuestionsSuccess = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [{id: 1}, {id: 2}],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockDidSelectAnswer = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: 'a',
    submitIsEnabled: true,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockDidSelectSubmit = {
    isHotReload: true,
    isLoading: true,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: 'a',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};


const mockDidSelectSubmitSuccess = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: [{id:1}, {id:2}]
};

const mockDidSelectSubmitFail = {
    isHotReload: true,
    isLoading: false,
    errorMessage: 'Oh no, something went wrong.',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockSetRandomQuestion = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [],
    randomQuestion: {title: 'What year is it?', question_uuid: 16},
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: false,
    answerStatistics: []
};

const mockIsSubmittedAnswerCorrect = {
    isHotReload: true,
    isLoading: false,
    errorMessage: '',
    data: [],
    randomQuestion: '',
    selectedAnswer: '',
    submitIsEnabled: false,
    isSubmittedAnswerCorrect: true,
    answerStatistics: []
};

describe('Redux Questions Reducers Tests', () => {

    test('should return the initial state', () => {
        expect(QuestionReducer(undefined, {
            type: ''
        })).toEqual(mockInitialState);
    });

    test('should handle fetch questions', () => {
        expect(QuestionReducer(undefined, {
            type: FETCH_QUESTIONS
        })).toEqual(mockFetchQuestions);
    });

    test('should handle fetch questions fail', () => {
        expect(QuestionReducer(undefined, {
            type: FETCH_QUESTIONS_FAIL
        })).toEqual(mockFetchQuestionsFail);
    });

    test('should handle fetch questions success', () => {
        expect(QuestionReducer(undefined, {
            type: FETCH_QUESTIONS_SUCCESS,
            payload: [{id: 1}, {id: 2}]
        })).toEqual(mockFetchQuestionsSuccess);
    });

    test('should handle did select answer', () => {
        expect(QuestionReducer(undefined, {
            type: DID_SELECT_ANSWER,
            payload: 'a'
        })).toEqual(mockDidSelectAnswer);
    });

    test('should handle did select submit', () => {
        expect(QuestionReducer(undefined, {
            type: DID_SELECT_SUBMIT,
            payload: 'a'
        })).toEqual(mockDidSelectSubmit);
    });

    test('should handle did select submit success', () => {
        expect(QuestionReducer(undefined, {
            type: DID_SELECT_SUBMIT_SUCCESS,
            payload: [{id:1}, {id:2}]
        })).toEqual(mockDidSelectSubmitSuccess);
    });

    test('should handle did select submit fail', () => {
        expect(QuestionReducer(undefined, {
            type: DID_SELECT_SUBMIT_FAIL
        })).toEqual(mockDidSelectSubmitFail);
    });

    test('should handle set random question', () => {
        expect(QuestionReducer(undefined, {
            type: SET_RANDOM_QUESTION,
            payload: {title: 'What year is it?', question_uuid: 16}
        })).toEqual(mockSetRandomQuestion);
    });

    test('should handle reset question state', () => {
        expect(QuestionReducer(undefined, {
            type: RESET_QUESTIONS_STATE
        })).toEqual(mockInitialState);
    });

    test('should handle is submitted answer correct', () => {
        expect(QuestionReducer(undefined, {
            type: IS_SUBMITTED_ANSWER_CORRECT,
            payload: true
        })).toEqual(mockIsSubmittedAnswerCorrect);
    });

});
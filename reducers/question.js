import * as types from "../actions/actionTypes";

const initialState = {
    loading:true,
    data:[],
    isFetched:false,
    error:"",
    processing:false,
    newQuestionText:"",
    cache:false,
    meta:{},
};
const Question = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTION':
            return { ...state, ...action.payload }
        case types.QUESTION_LIST_REQUEST:
            return { ...state, loading: true, error: "" };
        case types.QUESTION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payLoad,
                isFetched: true
            };
        case types.QUESTION_LIST_FAILURE:
            return { ...state, loading: false, error: action.error };

        case types.QUESTION_STORE_REQUEST:
            return { ...state, processing: true };
        case types.QUESTION_STORE_SUCCESS:
            return { ...state, processing: false, newQuestionText:"" };
        case types.QUESTION_STORE_FAILURE:
            return { ...state, processing: false };

        case types.QUESTION_ON_CHANGE:
            return {...state, newQuestionText: action.data }

        case types.QUESTION_UPDATE_REQUEST:
            return { ...state, processing: true };
        case types.QUESTION_UPDATE_SUCCESS:
            return { ...state, processing: false };
        case types.QUESTION_UPDATE_FAILURE:
            return { ...state, processing: false };
        default:
            return state
    }
};

export default Question
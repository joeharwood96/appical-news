import NewsActionTypes from './news.types';

const INITIAL_STATE = {
    topHeadlines: null
};

const newsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NewsActionTypes.FETCH_TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: action.payload
            };
        default: 
            return state;
    }
}

export default newsReducer;
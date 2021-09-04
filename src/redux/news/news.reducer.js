import NewsActionTypes from './news.types';

const INITIAL_STATE = {
    topHeadlines: null,
    searchArticles: null,
    isLoading: false,
    errors: null
};

const newsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return {
                ...state,
                isLoading: true
            };
        case NewsActionTypes.SET_TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: action.payload,
                isLoading: false,
                errors: null,
                searchArticles: null
            }
        case NewsActionTypes.SET_SEARCH_ARTICLES:
            return {
                ...state,
                searchArticles: action.payload,
                isLoading: false,
                errors: null,
                topHeadlines: null
            }
        case NewsActionTypes.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                isLoading: false
            }
        default: 
            return state;
    }
}

export default newsReducer;
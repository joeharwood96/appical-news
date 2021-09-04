import NewsActionTypes from './news.types';

const INITIAL_STATE = {
    topHeadlines: null,
    searchArticles: null,
    loading: false,
    errors: null
};

const newsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NewsActionTypes.FETCH_TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: action.payload
            };
        case NewsActionTypes.FETCH_SEARCH_ARTICLES:
            return {
                ...state,
                searchArticles: action.payload
            }
        default: 
            return state;
    }
}

export default newsReducer;
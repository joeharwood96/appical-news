import NewsActionTypes from './news.types';
import services from '../../utils/services';

const apiKey = "4bc0d1dca3fb4213802d64b55af60012";

export const fetchTopHeadlines = () => dispatch => {
    dispatch(requestStarted())
    services.getData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(data => {
            console.log(data);
            if(data.status === 'ok') {
                dispatch(setTopHeadlines(data.articles));
            } else {
                dispatch(setError(data));
            }
        })
        .catch(error => {
            dispatch(setError(error));
        });
}

export const setTopHeadlines = (data) => {
    return {
        type: NewsActionTypes.SET_TOP_HEADLINES,
        payload: data
    }
}

export const searchArticles = (searchQuery) => dispatch => {
    dispatch(requestStarted())
    services.getData(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=${apiKey}`)
        .then(data => {
            if(data.status === 'ok') {
                dispatch(setSearchArticles(data.articles));
            } else {
                dispatch(setError(data));
            }
        })
        .catch(error => {
            dispatch(setError(error));
        });
}

export const setSearchArticles = (data) => {
    return {
        type: NewsActionTypes.SET_SEARCH_ARTICLES,
        payload: data
    }
}

export const setError = (data) => {
    return {
        type: NewsActionTypes.SET_ERRORS,
        payload: data
    }
}

const requestStarted = () => {
    return {
        type: NewsActionTypes.FETCH_NEWS
    }
}


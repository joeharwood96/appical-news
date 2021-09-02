import NewsActionTypes from './news.types';
import services from '../../utils/services';

export const fetchTopHeadlines = () => dispatch => {
    services.getData('https://newsapi.org/v2/top-headlines?country=us&apiKey=4bc0d1dca3fb4213802d64b55af60012')
        .then(data => dispatch(setTopHeadlines(data)));
}

export const setTopHeadlines = (data) => {
    return {
        type: NewsActionTypes.FETCH_TOP_HEADLINES,
        payload: data
    }
}
import NewsActionTypes from './news.types';
import services from '../../utils/services';

const apiKey = "4bc0d1dca3fb4213802d64b55af60012"


export const fetchTopHeadlines = () => dispatch => {
    services.getData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(data => {
            if(data.status === 'ok') {
                dispatch(setTopHeadlines(data.articles));
            }
        });
}

export const setTopHeadlines = (data) => {
    return {
        type: NewsActionTypes.FETCH_TOP_HEADLINES,
        payload: data
    }
}
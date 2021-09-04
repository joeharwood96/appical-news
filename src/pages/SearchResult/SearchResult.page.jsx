import React from 'react';
import './SearchResult.scss';
import { connect } from 'react-redux';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';

const SearchResult = (props) => {
    const { news } = props;
    const { searchArticles } = news;

    return (
        <div className="search-result-wrapper">
            <header>
                <h1>Search Result</h1>
            </header>
            <NewsFeed articles={searchArticles}/>
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, {})(SearchResult);
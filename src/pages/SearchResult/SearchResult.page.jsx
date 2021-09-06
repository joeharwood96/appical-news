import React from 'react';
import './SearchResult.scss';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchArticles } from '../../redux/news/news.actions';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';
import Loader from "react-loader-spinner";
import Pagination from '../../components/Pagination/Pagination';

const SearchResult = (props) => {
    const { news, searchArticles } = props;
    const { isLoading, errors, searchResults } = news;
    const location = useLocation();
    const { searchString } = location.state

    return (
        <div className="search-result-wrapper">
            {
                errors ?
                <div class="error">{errors.message}</div>
                :
                null
            }
            <header>
                <h1>Search Result: {searchString}</h1>
            </header>
            {
                isLoading ? 
                <div className="no-results">
                    <Loader 
                        type="Puff"
                        color="#ff3349"
                        height={100}
                        width={100}
                    />
                </div>
                :
                <NewsFeed articles={searchResults && searchResults.articles}/>
            }
            {
                !isLoading && searchResults && searchResults.articles.length === 0 ?
                <div className="no-results">
                    <p>No results found for your search.</p> 
                </div>
                :
                null
            }
            {
                searchResults && searchResults.articles.length > 0 ? 
                <Pagination 
                    articles={searchResults.articles}
                    getData={searchArticles} 
                    pageSize={20}
                    totalResults={searchResults.totalResults}
                />
                :
                null
            }
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, { searchArticles })(SearchResult);
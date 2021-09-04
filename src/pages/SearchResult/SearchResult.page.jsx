import React from 'react';
import './SearchResult.scss';
import { connect } from 'react-redux';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';
import Loader from "react-loader-spinner";

const SearchResult = (props) => {
    const { news } = props;
    const { searchArticles, isLoading } = news;

    return (
        <div className="search-result-wrapper">
            <header>
                <h1>Search Result</h1>
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
                <NewsFeed articles={searchArticles}/>
            }
            {
                !isLoading && searchArticles && searchArticles.length === 0 ?
                <div className="no-results">
                    <p>No results found for your search.</p> 
                </div>
                :
                null
            }
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, {})(SearchResult);
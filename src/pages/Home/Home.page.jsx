import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../redux/news/news.actions';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';
import Loader from "react-loader-spinner";


const Home = (props) => {
    const { news, fetchTopHeadlines } = props;
    const { topHeadlines, isLoading } = news;

    useEffect(() => {
        function getData() {
            fetchTopHeadlines();
        }

        if (!topHeadlines) {
            getData();
        }

    }, [fetchTopHeadlines, topHeadlines])

    return (
        <div className="home-wrapper">
            <header>
                <h1>Top Headlines</h1>
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
                <NewsFeed articles={topHeadlines}/>
            }
            {
                !isLoading && topHeadlines && topHeadlines.length === 0 ?
                <div className="no-results">
                    <p>No results top headlines found.</p> 
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

export default connect(mapStateToProps, { fetchTopHeadlines })(Home);
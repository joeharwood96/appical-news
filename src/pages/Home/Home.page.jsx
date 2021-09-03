import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../redux/news/news.actions';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';


const Home = (props) => {
    const { news, fetchTopHeadlines } = props;
    const { topHeadlines } = news;
    
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
            <NewsFeed articles={topHeadlines}/>
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, { fetchTopHeadlines })(Home);
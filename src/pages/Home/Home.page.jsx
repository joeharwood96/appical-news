import React from 'react';
import './Home.scss';

// Components
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';

const Home = () => {
    

    return (
        <div className="home-wrapper">
            <h1>Top Headlines</h1>
            <NewsFeed />
        </div>
    )
}

export default Home;
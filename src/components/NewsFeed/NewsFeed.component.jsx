import React from 'react';
import './NewsFeed.scss';

// Components
import NewsCard from '../NewsCard/NewsCard.component';

const NewsFeed = ({ articles }) => {

    return (
        <div className="newsfeed-wrapper">
            {
                articles && articles.map((newsData, index) => {
                    return <NewsCard key={index} index={index} newsData={newsData}/>
                })
            }
        </div>
    )
}

export default NewsFeed;
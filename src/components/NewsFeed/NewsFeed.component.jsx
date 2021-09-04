import React, { Suspense } from 'react';
import './NewsFeed.scss';

// Components
import Skeleton from 'react-loading-skeleton';
const NewsCard = React.lazy(() => import('../NewsCard/NewsCard.component'));


const NewsFeed = ({ articles }) => {

    return (
        <div className="newsfeed-wrapper">
            {
                articles && articles.map((newsData, index) => {
                    return( 
                        <Suspense fallback={<Skeleton count={5}/>}>
                            <NewsCard key={index} index={index} newsData={newsData}/>
                        </Suspense>
                    )
                })
            }
        </div>
    )
}

export default NewsFeed;
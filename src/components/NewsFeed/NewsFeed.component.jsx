import React from 'react';
import './NewsFeed.scss';

// Components
import NewsCard from '../NewsCard/NewsCard.component';

const NewsFeed = () => {
    const data = [
        {
            source: {
                id: "the-washington-post",
                name: "The Washington Post"
            },
            author: "Gerry Shih",
            title: "India cuts internet and mobile phone service in Kashmir after separatist leader Syed Ali Shah Gilani dies - The Washington Post",
            description: "Syed Ali Shah Geelani, an icon of Kashmir’s separatist movement who vexed the New Delhi government for decades with his uncompromising politics, died Wednesday night.",
            url: "https://www.washingtonpost.com/world/2021/09/02/india-kashmir-gilani-death/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FXSIWZQLZMI6ZJ6IMG5XWO7WFA.jpg&w=1440",
            publishedAt: "2021-09-02T14:15:00Z",
            content: "After word of Geelanis death spread, local police sealed his street and whisked away his body early Thursday. Authorities did not permit Geelanis body to be buried at the martyrs graveyard, but he wa… [+4701 chars]"
        },
        {
            source: {
                id: null,
                name: "CNBC"
            },
            author: "Michael Wayland",
            title: "GM to significantly cut North American vehicle production due to chip shortage - CNBC",
            description: "General Motors said Thursday that it's adding or extending downtimes at eight plants in the U.S., Canada and Mexico.",
            url: "https://www.cnbc.com/2021/09/02/gm-to-significantly-cut-north-american-vehicle-production-due-to-chip-shortage.html",
            urlToImage: "https://image.cnbcfm.com/api/v1/image/105403458-1534526471744rts1wohe.jpg?v=1534526585",
            publishedAt: "2021-09-02T13:39:12Z",
            content: "DETROIT General Motors is once again significantly cutting production at its North American plants due to the semiconductor chip shortage, signaling the global parts problem remains a serious issue f… [+807 chars]"
        },
        {
            source: {
                id: null,
                name: "CNBC"
            },
            author: "Michael Wayland",
            title: "GM to significantly cut North American vehicle production due to chip shortage - CNBC",
            description: "General Motors said Thursday that it's adding or extending downtimes at eight plants in the U.S., Canada and Mexico.",
            url: "https://www.cnbc.com/2021/09/02/gm-to-significantly-cut-north-american-vehicle-production-due-to-chip-shortage.html",
            urlToImage: "https://image.cnbcfm.com/api/v1/image/105403458-1534526471744rts1wohe.jpg?v=1534526585",
            publishedAt: "2021-09-02T13:39:12Z",
            content: "DETROIT General Motors is once again significantly cutting production at its North American plants due to the semiconductor chip shortage, signaling the global parts problem remains a serious issue f… [+807 chars]"
        }
    ];

    return (
        <div className="newsfeed-wrapper">
            {
                data && data.map((newsData, index) => {
                    return <NewsCard index={index} newsData={newsData}/>
                })
            }
        </div>
    )
}

export default NewsFeed;
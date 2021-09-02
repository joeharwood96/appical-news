import React from 'react';
import './NewsCard.scss';

const NewsCard = ({ newsData, index }) => {

    return (
        <div className={`newscard-wrapper ${index === 0 ? "item-1" : null}` }>
            <div class="newscard-wrapper-thumb" style={{backgroundImage: `url(${newsData.urlToImage})`}}></div>
            <article>
                <div>
                    <h1>{newsData.title}</h1>
                    <p>{newsData.description}</p>
                </div>
                <span>{newsData.author}</span>
            </article>
        </div>
    )
}

export default NewsCard;
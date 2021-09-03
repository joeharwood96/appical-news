import React from 'react';
import './NewsCard.scss';

const NewsCard = ({ newsData, index }) => {
    return (
        <a className={`newscard-wrapper ${index === 0 ? "item-1" : null}` } href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724">
            <div className="newscard-wrapper-thumb" style={{backgroundImage: `url(${newsData.urlToImage})`}}></div>
            <article>
                <h1>{newsData.title}</h1>
                <p>{newsData.description.substring(0, 250)}</p>
                <span>{newsData.author}</span>
            </article>
        </a>
    )
}

export default NewsCard;
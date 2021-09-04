import React from 'react';
import './NewsCard.scss';
import { Link } from 'react-router-dom';

const NewsCard = ({ newsData, index }) => {
    return (
        <Link className={`newscard-wrapper ${index === 0 ? "item-1" : null}` } 
            to={{
                pathname: "/newsItem",
                state: { newsData }
            }}
        >
            <div className="newscard-wrapper-thumb" style={{backgroundImage: `url(${newsData.urlToImage})`}}></div>
            <article>
                <h1>{newsData.title}</h1>
                <p>{newsData.description && newsData.description.substring(0, 250)}</p>
                <span>{newsData.author}</span>
            </article>
        </Link>
    )
}

export default NewsCard;
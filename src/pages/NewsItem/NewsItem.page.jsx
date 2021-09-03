import React from 'react';
import './NewsItem.scss';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';

const NewsItem = () => {
    const location = useLocation()
    const { newsData } = location.state
    console.log(newsData)
    return (
        <div className='news-item-wrapper'>
            <header>
                <h1>{newsData.title}</h1>
                <span>{newsData.author} | <BiTimeFive /> {moment(newsData.publishedAt).fromNow()} | Link: <a href={newsData.url} target="_blank" rel="noreferrer"><AiOutlineLink /></a></span>
            </header>
            <article>
                <p>Source: {newsData.source && newsData.source.name}</p>
                <p>{newsData.description}</p>
                <div className="news-item-wrapper-thumb" style={{backgroundImage: `url(${newsData.urlToImage})`}}></div>
                <p>{newsData.content}</p>
            </article>
        </div>
    )
}

export default NewsItem;
import React, { useState } from 'react';
import './Search.scss';
import { BiSearch } from 'react-icons/bi';
import { connect } from 'react-redux';
import { searchArticles } from '../../redux/news/news.actions';
import { useHistory } from 'react-router';

const Search = (props) => {
    const [searchString, setSearchString] = useState('');
    const { searchArticles } = props;
    const history = useHistory();

    const handleSubmit = () => {
        if(searchString) {
            history.push({
                pathname: '/searchResult',
                state: { searchString }
            })
            searchArticles(searchString);
            setSearchString('');
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchString) {
            history.push({
                pathname: '/searchResult',
                state: { searchString }
            })
            searchArticles(searchString);
            setSearchString('');
        }
    }

    const handleChange = (e) => {
        setSearchString(e.target.value);
    }

    return (
        <div className="search">
            <div className="search-bar">
                <input 
                    type="text" 
                    className="search-bar-term" 
                    id="input_text" 
                    placeholder="Search articles..."
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    value={searchString}
                />
                <button 
                    type="submit" 
                    className="search-bar-button" 
                    onClick={handleSubmit}
                >
                    <BiSearch />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, { searchArticles })(Search);
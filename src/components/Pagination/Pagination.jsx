import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Pagination.scss';

const Pagination = ({ pageSize, getData, searchString, totalResults }) => {
    const [pages] = useState(Math.round(totalResults / pageSize));
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = pages < 5 ? pages : 5;

    function goToNextPage() {
        setCurrentPage(page => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage(page => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        if (searchString) {
            getData(searchString, currentPage);
        } else {
            getData(currentPage)
        }
    };

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getPaginatedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div className="pagination-wrapper">
            <button
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
                prev
            </button>
            {
                getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))
            }
            <button
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
                next
            </button>
        </div>
    )
}

const mapStateToProps = ({ news }) => ({
    news
})

export default connect(mapStateToProps, {})(Pagination);
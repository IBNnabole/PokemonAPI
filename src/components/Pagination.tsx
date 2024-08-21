import React from 'react';
import { Link } from 'react-router-dom';
import './PangCss.css'

interface PaginationProps {
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
    return (
        <div className="pagination">
            {currentPage > 1 ? (
                <Link to={`/?page=${currentPage - 1}`} className="pagination-link">Previous</Link>
            ) : (
                <span className="pagination-disabled">Previous</span>
            )}
            <span> Page {currentPage} </span>
            <Link to={`/?page=${currentPage + 1}`} className="pagination-link">Next</Link>
        </div>
    );
};

export default Pagination;

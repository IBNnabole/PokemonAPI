import React from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
    return (
        <div>
            {currentPage > 1 ? (
                <Link to={`/?page=${currentPage - 1}`}>Previous</Link>
            ) : (
                <span style={{ pointerEvents: 'none', color: 'grey' }}>Previous</span>
            )}
            <span> Page {currentPage} </span>
            <Link to={`/?page=${currentPage + 1}`}>Next</Link>
        </div>
    );
};

export default Pagination;

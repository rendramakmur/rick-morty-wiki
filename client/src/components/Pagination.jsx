import React from 'react';

export default function Pagination ({ page, fetchPage }) {
    return (
        <li className="page-item"><button onClick={(e) => fetchPage(e, page) } className="page-link small-text">{ page }</button></li>
    )
}

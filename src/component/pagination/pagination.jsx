import React from 'react';
const Pagination = ({postPerPage, totalPosts, handlePagination, curentPage}) =>{
    let paginationNumber = [];
    for(let i=1; i<= Math.ceil(totalPosts/postPerPage);i++){
        paginationNumber.push(i);
    }

    return(
        <div className='pagination'>
            {
                paginationNumber.map((pageNumber) =>(
                    <button key={pageNumber} onClick={() => handlePagination(pageNumber)} className={curentPage === pageNumber ? 'active' : ''}> {pageNumber}</button>
                ))
            }
        </div>
    )
}
export default Pagination;
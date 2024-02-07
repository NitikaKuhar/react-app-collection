import React, {useState} from 'react';

const Pages = ({list, itemPerPage}) =>{
    const [page, setPage] = useState(0);
    const start = page * itemPerPage;
    const end = start + itemPerPage;

    const pageArray = Array.from(Array(Math.ceil(list.length/itemPerPage)).keys());

    return(
        <div className="table-container">
            <div className="table-cols">
                {
                    list.length && Object.keys(list[0]).map((header,id) =>{
                        return(
                            <h2 key={id} style={{ width: 200 }}>{header}</h2>
                        )
                    })
                }

            </div>
            {
                list.length && list.slice(start, end).map((user, id) =>{
                    return(
                        <div className="row-item" key={id}>
                            {
                                Object.values(user).map((val,id)=>{
                                    return(
                                        <div key={id} className='row-item' style={{ width: 200 }}>{val}</div>
                                    )
                                })
                            }
                        </div>
                        
                    )
                })
            }
            <div className='row-item'>
                {
                    pageArray.map((p,id)=>{
                        return(
                            <p 
                                key={id} 
                                className={`page-number + ${page === p ? 'active-page' : ''}`}
                                onClick={()=>setPage(p)}
                            
                            >
                                {p+1}
                            </p>
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}

export default Pages;
import React from 'react';

const TableRows = ({user}) =>{
    const style ={
        cell: {
            border:'1px solid gray'
        }
    }

    return(
        <tr>
            <td style={style.cell}><img src={user.avatar} /></td>
            <td style={style.cell}>{user.fullName}</td>
            <td style={style.cell}>{user.email}</td>
            <td style={style.cell}>{user.phone}</td>
            <td style={style.cell}>{user.city}</td>
            <td style={style.cell}>{user.postcode}</td>
            <td style={style.cell}>{user.state}</td>
            <td style={style.cell}>{user.country}</td>
        </tr>
    )
}

export default TableRows
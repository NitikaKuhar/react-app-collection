
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setTableData } from './tableSlice';

const  TableComponent = () =>{
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.table.data);

    const loadData = () =>{
        const data = [
            {
                name:'Nitika',
                address:'Sunnyvale',
                contact:'1112222222'
            }
        ];

        dispatch(setTableData(data))
    }

    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Contact</td>
                    
                    </tr>
                    
                </thead>
                <tbody>
                    {tableData.length > 0 && tableData.map((row, index) =>{
                       return( <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.address}</td>
                            <td>{row.contact}</td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;
import React, {createContext, useState} from 'react';

export const TableDataContext = createContext();

export const TableDataProvider = ({children}) =>{
    const [tableData, setTableData] = useState([]);

    return(
        <TableDataContext.Provider value ={{tableData, setTableData}}>
            {children}
        </TableDataContext.Provider>
    )
}
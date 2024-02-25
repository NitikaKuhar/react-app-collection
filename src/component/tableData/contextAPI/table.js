import React from 'react';
import { TableDataProvider } from './tableContext';

import TableComponentContextAPI from './tableComponent';

const TableContextAPI = () =>{
    return(
        <TableDataProvider>
            <div>
                <TableComponentContextAPI />
            </div>
        </TableDataProvider>
    )
}

export default TableContextAPI;
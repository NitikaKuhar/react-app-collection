import React , {useContext, useEffect} from'react';
import { TableDataContext } from './tableContext';


const TableComponentContextAPI = () =>{
    const {tableData, setTableData} = useContext(TableDataContext);

    useEffect(()=>{
        setTimeout(()=>{
            const data = [
                {
                    name:'Nitika',
                    address:'Sunnyvale',
                    contact:'1112222222'
                },
                {
                    name:'Niti',
                    address:'Santa Clara',
                    contact:'1112222222'
                },
                {
                    name:'Nitu',
                    address:'SF',
                    contact:'1112222222'
                }
            ]

            setTableData(data);
        }, 100)
    },[])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Contact</td>
                    
                    </tr>
                    
                </thead>
                <tbody>
                    {tableData.map((row, index) =>{
                    
                      return(  <tr key={index}>
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

export default TableComponentContextAPI;
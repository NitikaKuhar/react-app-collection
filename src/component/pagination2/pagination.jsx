import React, {useState, useEffect} from 'react';
import getUserList from './service';
import Pages from './page';
import './pagination.css';
const URL = 'https://randomuser.me/api?results=24';



const Pagination2 = () =>{

    const [users, setUsers] = useState([]);

    const formatUserList = (data) =>{
       let  userList = [];

        data.forEach((item,idx) =>{
            let obj = {
                name: `${item.name.first} ${item.name.last}`,
                age: item.dob.age,
                email:item.email,
            }

            userList.push(obj)
        });

        setUsers(userList);
    }

    useEffect(()=>{
        getUserList(URL).then((data)=>{
            formatUserList(data.results)
        })
        .catch(error => console.log(error))
    },[])

    return(
        <div>
            {users.length ? (<Pages list={users} itemPerPage={5}/>) : null}
        </div>
    )

}

export default Pagination2;
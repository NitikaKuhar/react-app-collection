import Axios from 'axios';

const getUserList = (url) =>{
    return Axios.get(url)
    .then((response) =>{
        return response.data;
    })
    .catch(error => console.log(error))
}

export default getUserList;
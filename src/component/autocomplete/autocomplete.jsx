import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './autocomplete.css';
import Suggestions from './suggestions';
const url = 'https://reqres.in/api/users';


const Autocomplete = () =>{

    const [searchText, setSearchText] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [suggestions, setSuggestion] = useState([])

    const debounce = (callback, delay) =>{
        let timer = null;
        return function(...args){
            let context = this;
            clearTimeout(timer);

            timer = setTimeout(() =>{
                callback.apply(context, args)
            }, delay)

        }
    }
    
    const getUsers = (api) =>{
       return axios.get(api).then(res =>{
            return res.data.data
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() =>{
        getUsers(url).then(user=>{
            setUsersList(user)
        })
        .catch(error => console.log(error))
    },[]);

    const onChangeHandler = (text) =>{
        
        let matches = [];
        if(text.length > 0){
            matches = usersList.filter(user =>{
                let regEx = new RegExp(`${text}`,'gi');
                return user.email.match(regEx);
            })
        }
        // console.log(matches)
        setSearchText(text)
        setSuggestion(matches);
        

    }

    const selectHandler = (e) =>{
        /**
         * setTimeout onBlur is necessary else it wont set the input value selected
         * from the suggestion list
         */
        setSearchText(e)
        setSuggestion([]);
    }

    const debounceHandler = debounce((value) =>{
        onChangeHandler(value)
    }, 100)

 

    return(
        <div className='autocomplate-container'>
            <input type="text" onChange={(e) => debounceHandler(e.target.value)} value={searchText}
            onBlur={()=> 
                setTimeout(() => {
                setSuggestion([]);
                
                },300)}
                />
            <Suggestions suggestionList={suggestions} selectUser={selectHandler}/>
        </div>
    )
}

export default Autocomplete;
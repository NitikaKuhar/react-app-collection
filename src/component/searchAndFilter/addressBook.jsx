import React,{useState, useEffect} from 'react';
import Filter from './filterGroup';
import TableRows from './tableRow';
import Search from './searchBox';
const URL = "https://randomuser.me/api/?results=20";

const TableCols = [
  {
    label: "Avatar",
    value: "avatar"
  },
  {
    label: "Name",
    value: "fullName"
  },
  {
    label: "Email",
    value: "email"
  },
  {
    label: "Phone",
    value: "phone"
  },
  {
    label: "City",
    value: "city"
  },
  {
    label: "Postcode",
    value: "postcode"
  },
  {
    label: "State",
    value: "state"
  },
  {
    label: "Country",
    value: "country"
  }
];

const AddressBook = ({owner}) =>{
    const [sortAscOrder, setSortAscOrder] = useState(false);
    const [currentGenderFilter, setCurrentGenderFilet] = useState('all');
    const [addressBookList, setAddressBookList] = useState([]); // original list
    const [filteredAddressBook, setFilteredAddressBook] = useState([]); // filtered list
    const [tableHeader, setTableHeaser] = useState([]);

    const formatAddressBookList = (addressBook) =>{
        let flatternedList = [];

        addressBook.map((user, idx) =>{
            let { street, timezone, coordinates, ...rest} = user.location;
            let { title, first, last} = user.name;
            let {thumbnail} = user.picture;
            flatternedList.push({
                ...rest,
                avatar: thumbnail,
                fullName: `${title} ${first} ${last}`,
                email: user.email,
                phone: user.phone,
                streeName: street.name,
                gender: user.gender
            })
            let headers = Object.keys(flatternedList[0]);
            setTableHeaser(headers);
            setAddressBookList(flatternedList);
            setFilteredAddressBook(flatternedList)
        })

    }
    useEffect(() =>{
        const fetchAddressBookList = async () =>{

            const response = await fetch(URL);

            const addressBook = await response.json();
            // console.log(addressBook)

            formatAddressBookList(addressBook.results)

        };

      fetchAddressBookList()
    },[]);

    const filterBasedOnGender = (selectedGender) =>{
        setCurrentGenderFilet(selectedGender);

        if(selectedGender === 'all'){
            setFilteredAddressBook(addressBookList)
        }
        else{
            let filterList = addressBookList.filter((user) => user.gender === selectedGender)
            setFilteredAddressBook(filterList)
        }
    }

    const sortTable = (column) =>{
        if(column === 'avatar') return;
        setSortAscOrder(sortAsc => !sortAsc)

        let sortedList = addressBookList.sort((user1,user2) =>{
            if(sortAscOrder){
                if(user1[column] > user2[column]) return 1;
                if(user1[column] < user2[column]) return -1;
                return 0;
            }
            else{
                if(user1[column] > user2[column]) return -1;
                if(user1[column] < user2[column]) return 1;
                return 0;
            }
        })

        setAddressBookList(sortedList)
    }

    const searchUser = (searchedText) =>{
        // console.log(searchedText)
        if(searchedText !== ""){
            let searchedUserList = addressBookList.filter((row) =>{
                return Object.values(row).some((s) => {
                    return (" "+s).toLowerCase().includes(searchedText)
                })
            })
            setFilteredAddressBook(searchedUserList)
        }
        else{
            setFilteredAddressBook(addressBookList)
        }
    }

    return(
        <div className='main-container'>
            <div className='header-section'>
                <div><h1>Hello {owner}</h1></div>
                <div className='search-container'>
                    <Search  searchUser={searchUser}/>
                </div>
                <div className='filter-container'> 
                    <Filter label="Male" value="male" selected={currentGenderFilter === 'male'} updateList={filterBasedOnGender}/>
                    <Filter label="Female" value="female" selected={currentGenderFilter === 'female'} updateList={filterBasedOnGender}/>
                    <Filter label="All" value="all" selected={currentGenderFilter === 'all'} updateList={filterBasedOnGender}/>
                
                </div>
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            {
                                TableCols.map((col,idx) =>{
                                    return (
                                        <th key={idx} onClick={() => sortTable(col.value)}>
                                            {" "}
                                            {col.label}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredAddressBook.length ? filteredAddressBook.map((user, idx) =>{
                                return (
                                    <TableRows key={idx} user={user}/>
                                )
                            }) : 
                            <tr><td>No Record found!</td></tr>

                        }
                    </tbody>
                </table>
            
            </div>
           
            

        </div>
    )
}

export default AddressBook;
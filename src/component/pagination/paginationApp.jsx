import React, {useState, useEffect} from 'react';
// import './../../App.css';
import Pagination from './pagination';
import Post from './post';

function PaginationApp() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

useEffect(() =>{
  const fetchPost = async () =>{
    setLoading(true);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      setPosts(data);
      setLoading(false)
    }
    catch(error){
      console.log(error)
    }
  }
  fetchPost();
},[])

const indexOfNextPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfNextPost - postPerPage;
const currentPost = posts.slice(indexOfFirstPost, indexOfNextPost)

const handlePagination = (currentPage) =>{
  setCurrentPage(currentPage)
}


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
      <Post posts={currentPost} loading={loading}/>
      <Pagination totalPosts={posts.length} postPerPage={postPerPage} handlePagination={handlePagination} curentPage={currentPage}/>
      </header>
    </div>
  );
}

export default PaginationApp;

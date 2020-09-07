import React, {useState} from 'react';
import './App.css';
import {useEffect} from 'react';

import PaginationPreviousNextBtn from './Components/Pagination/PaginationPreviousNextBtn';
import PaginationWithAllPageBtn from "./Components/Pagination/PaginationWithAllPageBtn";


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  },[]);

  //Pagination
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [pagination, setPagination] = useState({
    start: 0,
    end: itemsPerPage,
  });
  const {start, end} =pagination;

  const onPaginationChange = (start, end) => {
    setPagination({start,end});
  };

  return (
    <div className="App">
      <h1 className="mb-5" style={{ textDecoration: "underline", fontSize: "50px" }}>
        This is simple react pagination.
      </h1>

      {posts.slice(start, end).map((post) => (
        <div className="container mb-3" style={{ border: "2px solid tomato" }}
          key={post.id}>
          <h3>
            #{post.id} - {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}

      <PaginationPreviousNextBtn itemsPerPage={itemsPerPage} onPaginationChange={onPaginationChange} totalItems={posts.length} />
      <PaginationWithAllPageBtn itemsPerPage={itemsPerPage} onPaginationChange={onPaginationChange} totalItems={posts.length} />
    </div>
  );
}

export default App;
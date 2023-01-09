import React, {useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import Card from "react-bootstrap/Card";
function UserPosts() {
    const [posts,setPosts] = useState();
    let {id} = useParams();
    useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
     .then((response) => setPosts(response.data))
     .catch((error) => console.dir(error));
    }, [])
    
  return (
    <div className="posts-container">
        {posts?.map((post,index) =>(
            <div className='posts-items' key={index} style={{width:"60rem",margin:"auto",padding:"20px"}}>
        <Card className="bg-dark text-white big-show">
          <Card.Header style={{fontSize:"27px"}}>{post.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {post.body}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    
        ))}
     </div> 
  );
}

export default UserPosts
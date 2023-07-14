import { useState, useEffect } from "react";

import axios from 'axios';
import SideWays from "./SideWays";
import Card from "./Card";
const Body = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const blogData = await axios.get("http://localhost:4000/allblogs")
            setBlogs(blogData.data.data);
            console.log(blogs)
        }catch(error){
            console.log(error)
        }
    }
    console.log(blogs)
  return (
    <div className="body-container">
      <div>
        <SideWays />
      </div>
      <div className="card-body-container1">
        {blogs.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            des={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

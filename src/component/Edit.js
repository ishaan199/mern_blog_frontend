import {useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';
const Edit = () => {
    const [blogData, setBlogData] = useState({
        title:"",
        description:""
    });

    const blogid = useParams();
    const navigate = useNavigate();

    const handleClick = async () => {
        let data = (await axios.put(`http://localhost:4000/update/blogs/${blogid.id}`,blogData))
        .then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        navigate('/home')
    }

    return (
      <div className="edit-container">
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={blogData.title}
          onChange={(e) => {
            setBlogData({ ...blogData, title: e.target.value });
          }}
        />
        <label htmlFor="">blog</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={blogData.description}
          onChange={(e) => {
            setBlogData({ ...blogData, description: e.target.value });
          }}
        ></textarea>

        <div>
          <button onClick={handleClick}>Edit</button>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
      </div>
    );
}
export default Edit;
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProfileCard from './ProfileCard';



const Profile = () => {
    const [userProfile, setUserProfile] = useState([]);
    const [userBlogs, setUserBlogs] = useState([]);

    const userId = useParams();

    useEffect(()=>{
        fetchData(userId.id);
    },[userId.id]);

    const fetchData = async (id) => {
        try{
            let data = await axios.get(`http://localhost:4000/users/${id}`);
            setUserProfile(data.data.data);
            // setUserBlogs(data)
            console.log(data.data.data.blogs)
            setUserBlogs(data.data.data.blogs);
        }catch(error){
            console.log(error.message)
        }
    }
    if(!userProfile){
        return <h1>Loading....</h1>
    };
    console.log(userBlogs)

        const {name, username, email, phone, active} = userProfile;

    return (
      <div className="profile-main">
        <div className="profile-container">
          <div className="profile-image-container">
            {/* <img src="" alt="profile-image" /> */}
          </div>
          <div className="profile-details">
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h4>Active : {active ? "🟢" : "🔴"}</h4>
          </div>
          <div>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <button>Logout</button>
          </div>
        </div>

        <div className="profile-blogs">
          {userBlogs.map((blog) => (
            <ProfileCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              description={blog.description}
            />
            
          ))}
          
        </div>
      </div>
    );
};

export default Profile;
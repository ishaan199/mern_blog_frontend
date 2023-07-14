import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const ProfileCard = ({ title, description,id }) => {

    let navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/edit/${id}`)
    }

  return (
    <div className="profile-card-container">
      <div className="inner-container">
        <h3>
          {title} <FaEdit onClick={handleEdit}/>
        </h3>

        <h3>{description} <MdDelete/></h3>
      </div>
    </div>
  );
};

export default ProfileCard;

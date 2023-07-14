

const Card = ({ title, des }) => {
  return (
    <div className="card-container">
      <div className="title-container">
        <h3>{title}</h3>
      </div>
      <div className="description">
        <h4 style={{color:"white"}}>{des}</h4>
      </div>
    </div>
  );
};
export default Card;
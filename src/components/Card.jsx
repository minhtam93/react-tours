import { useState } from "react";

function Card({ id, image, info, name, price, removeTour }) {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <div className="card" key={id}>
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="card-info">
          <h3 className="title">{name}</h3>
          <span>{price}</span>
        </div>
        <p className="card-desc">
          {!isReadMore ? `${info}   ` : `${info.substring(0, 200)}...`}
          <button onClick={() => setIsReadMore(!isReadMore)}>
            {!isReadMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;

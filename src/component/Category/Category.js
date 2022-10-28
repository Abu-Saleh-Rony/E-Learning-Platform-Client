import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ categoryDetail }) => {
  // console.log(categoryDetail);
  const { img, name, title, id } = categoryDetail;
  // console.log(id)

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/detailPage/${id}`);
  };

  return (
    <div>
      <div className="card w-96 h-[450px] glass mx-auto">
        <figure>
          <img src={img} alt="ima!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button onClick={handleShowDetails} className="btn btn-primary">
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

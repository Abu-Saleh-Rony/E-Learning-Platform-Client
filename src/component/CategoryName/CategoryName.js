import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryName = ({ named }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detailPage/${named.id}`);
  };
  return (
    <div>
      <p
        className="m-3 text-xl text-white p-1 rounded-md w-[50%] mx-auto bg-blue-600"
        onClick={handleNavigate}
      >
        <Link>{named.name}</Link>
      </p>
    </div>
  );
};

export default CategoryName;

import React, { useEffect, useState } from "react";

import Category from "../Category/Category";
import CategoryName from "../CategoryName/CategoryName";
import './Courses.css'
const Courses = () => {
  const [userData, setData] = useState([]);
  console.log(userData);

  useEffect(() => {
    fetch("https://server-iota-nine.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="main">
      <div className=" text-center  name-container">
        <h2 className="text-3xl text-blue-700 font-bold">Provide Courses</h2>
        {userData.map((named) => (
          <CategoryName key={named.id} named={named} />
        ))}
      </div>
      <div className=" detail-container">
        {userData.map((categoryDetail) => (
          <Category key={categoryDetail.id} categoryDetail={categoryDetail} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

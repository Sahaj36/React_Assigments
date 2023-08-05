// import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { courslist } from "./CourseList";
import { BiArrowBack } from "react-icons/bi";

function CourseDetail() {
  // const param = useParams();
  const navigate = useNavigate();

  // =========== OLD WAY =============
  // const [CourseDetail, setCourseDetail] = useState({});
  // useEffect(() => {
  //   const FindedValue = courslist.find((item) => item.id == param.id);
  //   setCourseDetail(FindedValue);
  // }, []);

  // ================ USING LOCATION ==============
  const location = useLocation();

  return (
    <div className="container">
      <button className="btn btn-danger mt-3" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      <div className="card text-bg-secondary w-50 mt-3 bg-ligth shadow">
        <div className="card-header">
          <h4>Course Detail : {location.state.id}</h4>
        </div>
        <div className="card-body">
          <h4 className="card-title mb-3">
            Course Name : {location.state.name}
          </h4>
          <h6 className="card-text  mb-3">
            Description : {location.state.desp}
          </h6>
          <h6 className="card-text mb-3">
            Price : {location.state.price} &#8377;
          </h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-info">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

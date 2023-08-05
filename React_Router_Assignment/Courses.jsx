import React, { useContext } from "react";
import { courslist } from "./CourseList";
import { useNavigate } from "react-router-dom";
import { AppDetails } from "./App";

function Courses() {
  const navigate = useNavigate();

 const { cart, setCart } = useContext(AppDetails)

 function addToCart(item) {
  const dataFound = cart.find((singleItem) => singleItem.id === item.id)

  console.log("hey", item);

  if(dataFound) {
    alert("You have already added this item in a cart")
  }else{
    setCart([...cart, item])
  }
 }

  return (
    <div className="container">
      <div className="row">
        {courslist.map((item) => {
          const { name, id } = item;
          return (
            <div className="col-md-3 mb-4 mt-5"  key={id}>
              <div className="card bg-secondary shadow">
                <div className="card-body">
                  <h5 className="mb-2 text-white">
                    {name} {id}
                  </h5>
                  {/* <Link to={`/Courses/${id}`} className="btn btn-info">View Course</Link> */}
                  <button
                    className="btn btn-sm btn-info mt-2"
                    onClick={() => navigate(`/Courses/${id}`, { state: item })}
                  >
                    View More
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-2 mt-2"
                    onClick={() => addToCart(item)}
                    >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;

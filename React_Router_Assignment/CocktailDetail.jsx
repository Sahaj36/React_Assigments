import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams();
  const [drinkDetail, setDrinkDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinkDetail(data.drinks[0]);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container">
      {/* <Link to="/Cocktail" className="btn btn-danger mt-3">Back</Link> */}
      <button
        className="btn btn-danger mt-3"
        onClick={() => navigate("/Cocktail")}
      >
        Back
      </button>
      <h2 className="mt-3">CocktailDeatails :</h2>
      <div className="row">
        <div className="col-lg-4 bg-info rounded-start-4">
          <img
            src={drinkDetail.strDrinkThumb}
            width="100%"
            className="img-fluid p-4 rounded-5"
            alt=""
          />
        </div>
        <div className="col-md-8 text-bg-info rounded-end-4">
          <h4 className="mt-5 pb-2">Name: {drinkDetail.strDrink}</h4>
          <h5 className="pb-2">ID: {id}</h5>
          <h6 className="pb-2">Category: {drinkDetail.strCategory}</h6>
          <h6 className="pb-2">{drinkDetail.strAlcoholic}</h6>
          <p>
            {" "}
            <h6>Instructions :</h6>
            {drinkDetail.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;

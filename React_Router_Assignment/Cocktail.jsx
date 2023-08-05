import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppDetails } from './App';

function Cocktail() {

     const { cart, setCart } = useContext(AppDetails)

 function addToCart(item) {
  const dataFound = cart.find((singleItem) => singleItem.idDrink === item.idDrink)

  console.log("hey", item);

  if(dataFound) {
    alert("You have already added this item in a cart")
  }else{
    setCart([...cart, item])
  }
 }

    const [ drinks, setDrinks ] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        .then((resp) => resp.json())
        .then(data => setDrinks(data.drinks));
    },[])   

  return (
    <div className='container-fluid'>
        <h1 className="p-2">Cocktails :</h1>
        <div className="row">
            {
                drinks.map((item) => {
                    const { strDrinkThumb, idDrink, strDrink } = item;
                    return (
                        <div className="col-md-3 mb-4" key={idDrink}>
                            <div className="card shadow">
                                <img src={strDrinkThumb} alt="" className="img-fluid"/>
                                <div className="card-body text-center">
                                    <h5 className='pb-2'>{strDrink}</h5>
                                    <Link to={`/Cocktail/${idDrink}`} className="btn btn-sm btn-info">View More</Link>
                                    <button className="btn btn-danger btn-sm ms-2" onClick={() => addToCart(item)}>Add Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cocktail

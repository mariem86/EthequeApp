import React, { useState, useEffect } from 'react';
import "./Product.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
import {getrate,addrate} from "../js/actions/rateAction"
const Product = ({ imageUrl, description, price, name, productId }) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getrate())
},[])
const rates=useSelector(state=>state.rate.rates)
  const rate=rates.filter(e=>e.product== productId)

  let count =0 ;
    let sum =0;
    let moy=0;

      for (let i = 0; i < rate.length; i++) {
        count=count+1
        sum=sum+rate[i].rating
      }
    
     moy=sum/count
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
        
      </div>
      <div className="product-rating">
                 <span className="rating">Rating</span> <span className="number3"> <StarRatingComponent name ="t" value={moy}/></span>
                 
               
              </div>
    </div>
  );
};

export default Product;
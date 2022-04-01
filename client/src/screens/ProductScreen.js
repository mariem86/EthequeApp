import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getrate,addrate} from "../js/actions/rateAction"
import StarRatingComponent from 'react-star-rating-component';
// Actions
import { getProductDetails } from "../js/actions/productAction";
import { addToCart } from "../js/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const rates=useSelector(state=>state.rate.rates)
  const rate=rates.filter(e=>e.product==match.params.id)
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  const [rating,setRating]=useState("")
  let counter=0;
for (let i = 0; i < rate.length; i++) {
  //if (userInfo && userInfo._id == rate[i].userInfo)
  counter = counter+1
 
}
const addratee = (e) => {
  e.preventDefault();
  // dispatch actions
  if (counter == 0){
  dispatch(
    addrate(match.params.id, { 
      rating: rating
    })
  );
   } setRating("")
};

useEffect(()=>{
  dispatch(getrate())
},[])
let count =0 ;
  let sum =0;
  let moy=0;
    for (let i = 0; i < rate.length; i++) {
      count=count+1
      sum=sum+rate[i].rating
    }
  
   moy=sum/count
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="500" data-speed="500">{count}</h6>
                                <p class="m-0px font-w-600">reviews number</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                            <StarRatingComponent name ="t" value={moy}/>
                            <br/>
                            <p class="m-0px font-w-600">Total rating </p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                            <select
                            className="form-control"
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">   select rating  </option>
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                            <button onClick={addratee} className="btn btn-primary btn-block">add</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
    
  );
};

export default ProductScreen;
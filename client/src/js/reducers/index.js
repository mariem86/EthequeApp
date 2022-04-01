import { combineReducers } from "redux";
import {
    getProductsReducer,
    getProductDetailsReducer,
  } from "./productReducer";
  import { cartReducer } from "./cartReducer";
  import rateReducer from "./rateReducer"
  import { userSigninReducer,userRegisterReducer,userUpdateReducer} from "./authReducer"
  import{orderCreateReducer, orderDetailsReducer,
    orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer} from "./orderReducer"
export default combineReducers({
   
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer,
    rate:rateReducer,
    userSigninReducer,userRegisterReducer,orderCreateReducer, orderDetailsReducer,
    orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer,userUpdateReducer
  });
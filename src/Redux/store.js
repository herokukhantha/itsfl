import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { 
    productCreateReviewReducer,
    productDetailsReducer, 
    productListReducer 
} from "./Reducers/ProductReducer";
import { cartReducer } from "./Reducers/CartReducers";
import { 
    userDetailsReducer, 
    userLoginReducer, 
    userRegisterReducer,
    userUpdateProfileReducer, 
} from "./Reducers/userReducer";
import { 
    orderCreateReducer, 
    orderDetailsReducer, 
    orderListMyReducer, 
    orderPayReducer } from "./Reducers/OrderReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    productReviewCreate : productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
:[];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null ;

// shippingAddress
const shippingInfoFromLocalStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {} ;

// paymentMethod
const paymentInfoFromLocalStorage = localStorage.getItem("paymentMethod")
? JSON.parse(localStorage.getItem("paymentMethod"))
: {} ;

const initialState = {
    cart :{
        cartItems : cartItemsFromLocalStorage,
        shippingAddress:shippingInfoFromLocalStorage
    },
    userLogin:
    {
        userInfo : userInfoFromLocalStorage
    }
};

const Middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
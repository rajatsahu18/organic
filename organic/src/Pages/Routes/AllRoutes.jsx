import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import Login from "../Login/Login";
import Mainpage from "../Mainpage/Mainpage";
import Registration from "../Registration.jsx/Registration";
import { InformationPage } from "../Information/InformationPage";
import PaymentPage from "../Payment/PaymentPage";
import UserRoute from "../Routes/PrivateRoute";
import BillingPage from "../Billing/BillingPage";
import About from "../About/About";
import Himalaya from "../Products/Himalaya/Himalaya";
import CartPage from "../Cart/CartPage";
import { setUser } from "../../Redux/Authreducer/action";
import Mamaearth from "../Products/Mamaearth/Mamaearth";

const AllRoutes = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
      <Route
        path="/himalaya"
        element={
          <UserRoute>
            <Himalaya />
          </UserRoute>
        }
      />
      <Route
        path="/mamaearth"
        element={
          <UserRoute>
            <Mamaearth />
          </UserRoute>
        }
      />
      <Route
        path="/cartPage"
        element={
          <UserRoute>
            <CartPage />
          </UserRoute>
        }
      />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/about" element={<About />}/>
      <Route
        path="/billing"
        element={
          <UserRoute>
            <BillingPage />
          </UserRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <UserRoute>
            <InformationPage />
          </UserRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <UserRoute>
            <PaymentPage />
          </UserRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;

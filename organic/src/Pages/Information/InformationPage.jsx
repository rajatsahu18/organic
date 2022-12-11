import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gpay from "../../image/GpayLogo.PNG"
import amazonPay from "../../image/amzonPayLogo.PNG";
import ShopPay from"../../image/shopPay logo.PNG";
import CheckoutPayment from "../Checkout/CheckoutPayment";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Texts } from "../../Common/constants";
import { Box, Button, Image, Input, Select, Text } from "@chakra-ui/react";
import BreadCumbs from "../../Common/BreadCumbs";


export const InformationPage = () => {
   const navigate = useNavigate()
  const [form, setform] = useState({
    email: "",
    address: "",
    FirstName:"",
    LastName:"",
    Phone:"",
    City:"",
    apartment:""
  });

  const handleAdd = (e) => {
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };


  const [info] = useState(JSON.parse(localStorage.getItem("UserInfo")));
  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserInfo",JSON.stringify(form));
  
    navigate("/payment")

  };
  return (
    <Box display='flex' m='11.2rem 0 0 5rem' >
        <Box w='40rem'>
          <Box>
            <BreadCumbs/>
          </Box>
          <Box display='flex'  >
           <Image w='8rem' m='1rem' alt="logo" src={ShopPay}/>
           <Image w='8rem' m='1rem' src={amazonPay} alt="logo"/>
           <Image w='8rem' m='1rem' src={Gpay} alt="logo"/>
          </Box>
          
          <Box mb='1rem'>
            <Text mt='1rem'>{Texts.CONTACT}</Text>
            <Text fontSize='0.8rem'>
            {Texts.ALREADY_LOGIN}
            </Text>
          </Box>

          <form onSubmit={handleOnSubmit}>
            <Box>
              <Input
                type="Email"
                placeholder="Email"
                name="email"
                onChange={handleAdd}
                value={info ? info.email:form.email}
                required
              />
            </Box>

            <Text mt='2rem'>{Texts.SHIPPING_ADDRESS}</Text>

            <Box mt='1rem'>
              <Select >
                <option>
                {Texts.UNITED_STATES}
                </option>
              </Select>
            </Box>

            <Box display='flex' m='1rem 0' gap='1rem'>
              <Box>
                <Input
                  type="name"
                  placeholder="First Name"
                  name="FirstName"
                  value={info ?info.FirstName :form.FirstName}
                  onChange={handleAdd}
                  required
                />
              </Box>
              <Box>
                <Input
                  type="name"
                  placeholder="Last Name"
                  name="LastName"
                  value={info ?info.LastName :form.LastName}
                  onChange={handleAdd}
                  required
                />
              </Box>
            </Box>

              <Input
               mb='1rem'
                type="address"
                placeholder="Address"
                required
                name="address"
                onChange={handleAdd}
                value={info ?info.address :form.address}                
              />
              <Input
               mb='1rem'
                type="address"
                placeholder="Apartment,suite,etc. (optional)"
                 name="apartment"
                 onChange={handleAdd} 
                value={info ?info.apartment :form.apartment}
                required
              />
            <Box  mb='1rem' display='flex' gap='1rem'>
              <Box>
                <Input
                  type="text"
                  placeholder="City"
                  name="City"
                  onChange={handleAdd}
                  value={info ?info.City :form.City}
                  required
                 
                />
              </Box>
              <Box>
                <Select>
               <option disabled="">{Texts.STATE}</option>
            
                  <option data-alternate-values='["Alabama"]' value="AL">
                    Alabama
                  </option>
                  <option data-alternate-values='["Alaska"]' value="AK">
                    Alaska
                  </option>
                  <option data-alternate-values='["American Samoa"]' value="AS">
                    American Samoa
                  </option>
                  <option data-alternate-values='["Arizona"]' value="AZ">
                    Arizona
                  </option>
                  <option data-alternate-values='["Arkansas"]' value="AR">
                    Arkansas
                  </option>
                  <option data-alternate-values='["California"]' value="CA">
                    California
                  </option>
                  <option data-alternate-values='["Colorado"]' value="CO">
                    Colorado
                  </option>
                  <option data-alternate-values='["Connecticut"]' value="CT">
                    Connecticut
                  </option>
                  <option data-alternate-values='["Delaware"]' value="DE">
                    Delaware
                  </option>
                  <option data-alternate-values='["Florida"]' value="FL">
                    Florida
                  </option>
                  <option data-alternate-values='["Georgia"]' value="GA">
                    Georgia
                  </option>
                  <option data-alternate-values='["Guam"]' value="GU">
                    Guam
                  </option>
                  <option data-alternate-values='["Hawaii"]' value="HI">
                    Hawaii
                  </option>
                  <option data-alternate-values='["Idaho"]' value="ID">
                    Idaho
                  </option>
                  <option data-alternate-values='["Illinois"]' value="IL">
                    Illinois
                  </option>
                  <option data-alternate-values='["Indiana"]' value="IN">
                    Indiana
                  </option>
                  <option data-alternate-values='["Iowa"]' value="IA">
                    Iowa
                  </option>
                  <option data-alternate-values='["Kansas"]' value="KS">
                    Kansas
                  </option>
                  <option data-alternate-values='["Kentucky"]' value="KY">
                    Kentucky
                  </option>
                  <option data-alternate-values='["Louisiana"]' value="LA">
                    Louisiana
                  </option>
                  <option data-alternate-values='["Maine"]' value="ME">
                    Maine
                  </option>
                  <option
                    data-alternate-values='["Marshall Islands"]'
                    value="MH"
                  >
                    Marshall Islands
                  </option>
                  <option data-alternate-values='["Maryland"]' value="MD">
                    Maryland
                  </option>
                  <option data-alternate-values='["Massachusetts"]' value="MA">
                    Massachusetts
                  </option>
                  <option data-alternate-values='["Michigan"]' value="MI">
                    Michigan
                  </option>
                  <option
                    data-alternate-values='["Federated States of Micronesia"]'
                    value="FM"
                  >
                    Micronesia
                  </option>
                  <option data-alternate-values='["Minnesota"]' value="MN">
                    Minnesota
                  </option>
                  <option data-alternate-values='["Mississippi"]' value="MS">
                    Mississippi
                  </option>
                  <option data-alternate-values='["Missouri"]' value="MO">
                    Missouri
                  </option>
                  <option data-alternate-values='["Montana"]' value="MT">
                    Montana
                  </option>
                  <option data-alternate-values='["Nebraska"]' value="NE">
                    Nebraska
                  </option>
                  <option data-alternate-values='["Nevada"]' value="NV">
                    Nevada
                  </option>
                  <option data-alternate-values='["New Hampshire"]' value="NH">
                    New Hampshire
                  </option>
                  <option data-alternate-values='["New Jersey"]' value="NJ">
                    New Jersey
                  </option>
                  <option data-alternate-values='["New Mexico"]' value="NM">
                    New Mexico
                  </option>
                  <option data-alternate-values='["New York"]' value="NY">
                    New York
                  </option>
                  <option data-alternate-values='["North Carolina"]' value="NC">
                    North Carolina
                  </option>
                  <option data-alternate-values='["North Dakota"]' value="ND">
                    North Dakota
                  </option>
                  <option
                    data-alternate-values='["Northern Mariana Islands"]'
                    value="MP"
                  >
                    Northern Mariana Islands
                  </option>
                  <option data-alternate-values='["Ohio"]' value="OH">
                    Ohio
                  </option>
                  <option data-alternate-values='["Oklahoma"]' value="OK">
                    Oklahoma
                  </option>
                  <option data-alternate-values='["Oregon"]' value="OR">
                    Oregon
                  </option>
                  <option data-alternate-values='["Palau"]' value="PW">
                    Palau
                  </option>
                  <option data-alternate-values='["Pennsylvania"]' value="PA">
                    Pennsylvania
                  </option>
                  <option data-alternate-values='["Puerto Rico"]' value="PR">
                    Puerto Rico
                  </option>
                  <option data-alternate-values='["Rhode Island"]' value="RI">
                    Rhode Island
                  </option>
                  <option data-alternate-values='["South Carolina"]' value="SC">
                    South Carolina
                  </option>
                  <option data-alternate-values='["South Dakota"]' value="SD">
                    South Dakota
                  </option>
                  <option data-alternate-values='["Tennessee"]' value="TN">
                    Tennessee
                  </option>
                  <option data-alternate-values='["Texas"]' value="TX">
                    Texas
                  </option>
                  <option data-alternate-values='["Virgin Islands"]' value="VI">
                    U.S. Virgin Islands
                  </option>
                  <option data-alternate-values='["Utah"]' value="UT">
                    Utah
                  </option>
                  <option data-alternate-values='["Vermont"]' value="VT">
                    Vermont
                  </option>
                  <option data-alternate-values='["Virginia"]' value="VA">
                    Virginia
                  </option>
                  <option data-alternate-values='["Washington"]' value="WA">
                    Washington
                  </option>
                  <option
                    data-alternate-values='["District of Columbia"]'
                    value="DC"
                  >
                    Washington DC
                  </option>
                  <option data-alternate-values='["West Virginia"]' value="WV">
                    West Virginia
                  </option>
                  <option data-alternate-values='["Wisconsin"]' value="WI">
                    Wisconsin
                  </option>
                  <option data-alternate-values='["Wyoming"]' value="WY">
                    Wyoming
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Americas"]'
                    value="AA"
                  >
                    Armed Forces Americas
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Europe"]'
                    value="AE"
                  >
                    Armed Forces Europe
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Pacific"]'
                    value="AP"
                  >
                    Armed Forces Pacific
                  </option>
                </Select>
              </Box>
              <Box>
                <Input
                  type="text"
                  placeholder="PIN Code"
                  name="Pincode"
                  value={info ?info.Pincode :form.Pincode}
                  onChange={handleAdd}
                  required
                />
              </Box>
            </Box>

              <Input
                type="number"
                placeholder="Phone"
                required
                name="Phone"
                value={info ?info.Phone :form.Phone}
                onChange={handleAdd}
            
              />
            <Box mt='1rem'>
              <input
                type="checkbox"
              />
              <label
                htmlFor=""
                style={{ fontSize: "1rem", marginLeft:'1rem' }}
              >
                {Texts.SAVE_INFORMATION}
              </label>
            </Box>
            <Box display='flex' justifyContent='space-between' p='1%'>
              <Box display='flex' p='2%'>
                  <Text mt='0.2rem'>
                    <MdOutlineArrowBackIosNew size='1rem' />
                  </Text>
                  <Text fontSize='0.9rem'>
                    <Link to="/checkout">{Texts.RETURN_INFORMATION}</Link>
                  </Text>
              </Box>
              <Box>
                <Button type="submit" bg='#A6CE3A' color='#fff'>
                  <Link
                    to="/payment"
                  >
                    {Texts.CONTINUE_SHIPPING}
                  </Link>
                </Button>
              </Box>
            </Box>
          </form>

          <Box display='flex' gap='1rem' borderTop='1px solid lightgrey'>
            <Box>{Texts.REFUND_POLICY}</Box>
            <Box>{Texts.SHIPPING_POLICY}</Box>
            <Box>{Texts.PRIVACY_POLICY}</Box>
            <Box>{Texts.TERMS_OF_SERVICE}</Box>
          </Box>
        </Box>

        <Box m='5%'> 
         <CheckoutPayment />
         </Box>
      </Box>
    // </Box>
  );
};


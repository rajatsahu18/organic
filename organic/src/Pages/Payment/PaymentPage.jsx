import React from "react";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Button, Image, Input, Radio, Select, Text } from "@chakra-ui/react";
import { VscCreditCard } from "react-icons/vsc";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gif from "../../image/dotsLoading.gif";
import CheckoutPayment from "../Checkout/CheckoutPayment";
import { Texts } from "../../Common/constants";
import BreadCumbs from "../../Common/BreadCumbs";

const PaymentPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();

  const { onToggle: onToggle3 } = useDisclosure();
  const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();


  const [payNow, setpayNow] = useState(false);
  const navigate = useNavigate();
  const [ info ]=useState(JSON.parse(localStorage.getItem("UserInfo")));

  if (payNow) {
    setTimeout(() => {
      setpayNow(false);
      navigate("/billing");
    }, 3000);
  }

  return (
      <Box display='flex' m='11.2rem 0 0 5rem' >
        <Box p='2rem'>
          <Box >
            <BreadCumbs/>
            <Box border='1px solid lightgrey' p='1%' mt='4%'>
              <Box display='flex' justifyContent='space-between' p='1%'>
                <Text >{Texts.CONTACT}</Text>
                <Text>{info ? info.email : "Fill the details"}</Text>
                <Text fontSize='0.8rem'>
                    <Link to="/checkout">{Texts.CHANGE}</Link>
                </Text>           
              </Box>
              <Box>
                <Box display='flex' justifyContent='space-between' p='1%'>
                  <Text >{Texts.SHIP_TO}</Text>
                  <Text>{info ? info.address : "Fill the details"}</Text>
                  <Text fontSize='0.8rem'>
                    <Link to="/checkout">{Texts.CHANGE}</Link>
                  </Text>
                </Box>
              </Box>
              <Box display='flex' justifyContent='space-between' p='1%'>          
                  <Text>{Texts.METHOD}</Text>               
                  <Text>{Texts.STANDARD_FREE}</Text>              
                  <Text fontSize='0.8rem'>
                    <Link to="/checkout">{Texts.CHANGE}</Link>
                  </Text>
                </Box>
            </Box> 

             <Box fontSize='1rem' p='2%'>
              <Text >{Texts.PAYMENT}</Text>
              <Text>{Texts.ALL_TRANSACTIONS}</Text>
            </Box>
            <Box border= '1px solid #cccccc' p='2%'>
              <Box>
                <Box display='flex' justifyContent='space-between' gap='1rem' p='1%'>
                  <Radio onClick={onToggle} position="absolute" mt='0.5%'/>
                  <Text ml='2rem'>{Texts.CREDIT_CARDS}</Text>

                  <Box display='flex' gap='0.5rem'>
                    <Image
                      border= '0.1px solid #cccccc'
                      h='1.5rem' w='2.4rem'
                      src="https://tse4.mm.bing.net/th?id=OIP.Fh3VxQRxG0ZEt2mCfL0qrwHaFj&pid=Api&P=0&w=225&h=169"
                      alt="images"
                    />
                    <Image
                      border= '0.1px solid #cccccc'
                      h='1.5rem' w='2.4rem'
                      src="https://tse3.mm.bing.net/th?id=OIP.AKgfIEQz_qXEOAAyV_0-2wHaEJ&pid=Api&P=0&w=318&h=178"
                      alt="images"
                    />
                    <Image
                      border= '0.1px solid #cccccc'
                      h='1.5rem' w='2.4rem'
                      src="https://tse4.mm.bing.net/th?id=OIP.3FY890qAiAea54EGA9EuNwHaEF&pid=Api&P=0&w=349&h=192"
                      alt="images"
                    />
                    <Image
                      border= '0.1px solid #cccccc'
                      h='1.5rem' w='2.4rem'
                      src="https://tse4.mm.bing.net/th?id=OIP.xH4KzXP59t5UuYr0fFg0iAHaEo&pid=Api&P=0&w=250&h=156"
                      alt="images"
                    />
                  </Box>
                </Box>

                <Box>
                  <Collapse in={isOpen} animateOpacity>
                    <Box p='2rem'>
                      <Text >{Texts.CREDIT_DETAILS}</Text>
                        <Input
                          type="number"
                          placeholder="Card Number"
                          required
                          maxlength="16"
                          mt='1rem'
                        />
                        <Input
                          type="text"
                          placeholder="Name on Card"
                          required
                          name="address"
                          mt='1rem'
                        />
                      </Box>
                      <Box display='flex' m='-1rem 2rem 2rem 2rem' gap='1rem'>
                          <Input
                            required
                            type="month"
                            placeholder="Expairy date(MM/YY)"
                            
                          />                  
                          <Input
                            required
                            type="password"
                            placeholder="Security code"
                            maxLength="3"
                          />
                      </Box>
                  </Collapse>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box >
                    <Radio
                      onClick={onToggle1}
                      position="absolute" m='0.5% 0.3%'/>
                    <a  href="https://pay.amazon.com/signin">
                      <Image
                        h='1.5rem' ml='2rem'
                        src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/amazonpay@2x-6ed2b0ce5c20dfd0dc87f9363f0a57ecf9bb4e4fde26df79b3da96e6480cebd4.png"
                        alt="images"
                      />
                    </a>
                  </Box>

                  <Box>
                    <Collapse in={isOpen1} animateOpacity>
                      <Box p='2rem'>
                        <Box ml='7rem'><VscCreditCard size='10rem' /></Box>
                        <Box>
                          <Text textAlign='center'>
                          {Texts.AMAZON_LOGIN}
                          </Text>
                        </Box>
                      </Box>
                    </Collapse>
                  </Box>
                </Box>
              </Box>
            </Box>


            <Box fontSize='1rem' p='2%'>
              <Text fontSize='1rem'>{Texts.BILLING_ADDRESS}</Text>
              <Text>{Texts.SELECT_ADDRESS}</Text>
            </Box>

            <Box fontSize='1rem' p='1%'>
              <Box>
                <Box>
                  <Radio
                    onClick={onToggle3}
                    position="absolute"
                  />
                  <Text ml='2rem'>{Texts.SHIPPING_ADDRESS}</Text>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box>
                    <Radio
                      onClick={onToggle4}
                      position="absolute"
                    />
                    <Text fontSize='1rem' ml='2rem'>{Texts.DIFFERENT_ADDRESS}</Text>
                  </Box>

                  <Box>
                    <Collapse in={isOpen4} animateOpacity>
                      <Box p='1rem'>
                        <Box>{Texts.SHIPPING}</Box>
                        <Box >
                          <Select m='0.5rem'>
                            <option value="">
                            {Texts.UNITED_STATES}
                            </option>
                          </Select>
                        </Box>

                        <Box display='flex'>
                          <Input
                            type="name"
                            placeholder="First Name"
                            m='0.5rem'
                            value={info ? info.FirstName:""}
                          />
                          <Input
                            type="name"
                            placeholder="Last Name"
                            m='0.5rem'
                            value={info ? info.LastName:""}
                          />
                        </Box>

                        <Box>
                          <Input
                            type="address"
                            placeholder="Address"
                            required 
                            name="address"
                            value={info ? info.address:""}
                            m='0.5rem'
                          />
                        </Box>
                        <Box>
                          <Input
                            type="address"
                            placeholder="Apartment,suite,etc. (optional)"
                            required
                            m='0.5rem'
                            value={info ? info.apartment:""}
                          />
                        </Box>

                        <Box display='flex'>
                            <Input
                              type="text"
                              placeholder="City"
                              m='0.5rem'
                              value={info ? info.City:""}
                            />
                            <Select
                              m='0.5rem'
                            >
                              <option disabled="">{Texts.STATE}</option>

                              <option
                                data-alternate-values='["Alabama"]'
                                value="AL"
                              >
                                Alabama
                              </option>
                              <option
                                data-alternate-values='["Alaska"]'
                                value="AK"
                              >
                                Alaska
                              </option>
                              <option
                                data-alternate-values='["American Samoa"]'
                                value="AS"
                              >
                                American Samoa
                              </option>
                              <option
                                data-alternate-values='["Arizona"]'
                                value="AZ"
                              >
                                Arizona
                              </option>
                              <option
                                data-alternate-values='["Arkansas"]'
                                value="AR"
                              >
                                Arkansas
                              </option>
                              <option
                                data-alternate-values='["California"]'
                                value="CA"
                              >
                                California
                              </option>
                              <option
                                data-alternate-values='["Colorado"]'
                                value="CO"
                              >
                                Colorado
                              </option>
                              <option
                                data-alternate-values='["Connecticut"]'
                                value="CT"
                              >
                                Connecticut
                              </option>
                              <option
                                data-alternate-values='["Delaware"]'
                                value="DE"
                              >
                                Delaware
                              </option>
                              <option
                                data-alternate-values='["Florida"]'
                                value="FL"
                              >
                                Florida
                              </option>
                              <option
                                data-alternate-values='["Georgia"]'
                                value="GA"
                              >
                                Georgia
                              </option>
                              <option
                                data-alternate-values='["Guam"]'
                                value="GU"
                              >
                                Guam
                              </option>
                              <option
                                data-alternate-values='["Hawaii"]'
                                value="HI"
                              >
                                Hawaii
                              </option>
                              <option
                                data-alternate-values='["Idaho"]'
                                value="ID"
                              >
                                Idaho
                              </option>
                              <option
                                data-alternate-values='["Illinois"]'
                                value="IL"
                              >
                                Illinois
                              </option>
                              <option
                                data-alternate-values='["Indiana"]'
                                value="IN"
                              >
                                Indiana
                              </option>
                              <option
                                data-alternate-values='["Iowa"]'
                                value="IA"
                              >
                                Iowa
                              </option>
                              <option
                                data-alternate-values='["Kansas"]'
                                value="KS"
                              >
                                Kansas
                              </option>
                              <option
                                data-alternate-values='["Kentucky"]'
                                value="KY"
                              >
                                Kentucky
                              </option>
                              <option
                                data-alternate-values='["Louisiana"]'
                                value="LA"
                              >
                                Louisiana
                              </option>
                              <option
                                data-alternate-values='["Maine"]'
                                value="ME"
                              >
                                Maine
                              </option>
                              <option
                                data-alternate-values='["Marshall Islands"]'
                                value="MH"
                              >
                                Marshall Islands
                              </option>
                              <option
                                data-alternate-values='["Maryland"]'
                                value="MD"
                              >
                                Maryland
                              </option>
                              <option
                                data-alternate-values='["Massachusetts"]'
                                value="MA"
                              >
                                Massachusetts
                              </option>
                              <option
                                data-alternate-values='["Michigan"]'
                                value="MI"
                              >
                                Michigan
                              </option>
                              <option
                                data-alternate-values='["Federated States of Micronesia"]'
                                value="FM"
                              >
                                Micronesia
                              </option>
                              <option
                                data-alternate-values='["Minnesota"]'
                                value="MN"
                              >
                                Minnesota
                              </option>
                              <option
                                data-alternate-values='["Mississippi"]'
                                value="MS"
                              >
                                Mississippi
                              </option>
                              <option
                                data-alternate-values='["Missouri"]'
                                value="MO"
                              >
                                Missouri
                              </option>
                              <option
                                data-alternate-values='["Montana"]'
                                value="MT"
                              >
                                Montana
                              </option>
                              <option
                                data-alternate-values='["Nebraska"]'
                                value="NE"
                              >
                                Nebraska
                              </option>
                              <option
                                data-alternate-values='["Nevada"]'
                                value="NV"
                              >
                                Nevada
                              </option>
                              <option
                                data-alternate-values='["New Hampshire"]'
                                value="NH"
                              >
                                New Hampshire
                              </option>
                              <option
                                data-alternate-values='["New Jersey"]'
                                value="NJ"
                              >
                                New Jersey
                              </option>
                              <option
                                data-alternate-values='["New Mexico"]'
                                value="NM"
                              >
                                New Mexico
                              </option>
                              <option
                                data-alternate-values='["New York"]'
                                value="NY"
                              >
                                New York
                              </option>
                              <option
                                data-alternate-values='["North Carolina"]'
                                value="NC"
                              >
                                North Carolina
                              </option>
                              <option
                                data-alternate-values='["North Dakota"]'
                                value="ND"
                              >
                                North Dakota
                              </option>
                              <option
                                data-alternate-values='["Northern Mariana Islands"]'
                                value="MP"
                              >
                                Northern Mariana Islands
                              </option>
                              <option
                                data-alternate-values='["Ohio"]'
                                value="OH"
                              >
                                Ohio
                              </option>
                              <option
                                data-alternate-values='["Oklahoma"]'
                                value="OK"
                              >
                                Oklahoma
                              </option>
                              <option
                                data-alternate-values='["Oregon"]'
                                value="OR"
                              >
                                Oregon
                              </option>
                              <option
                                data-alternate-values='["Palau"]'
                                value="PW"
                              >
                                Palau
                              </option>
                              <option
                                data-alternate-values='["Pennsylvania"]'
                                value="PA"
                              >
                                Pennsylvania
                              </option>
                              <option
                                data-alternate-values='["Puerto Rico"]'
                                value="PR"
                              >
                                Puerto Rico
                              </option>
                              <option
                                data-alternate-values='["Rhode Island"]'
                                value="RI"
                              >
                                Rhode Island
                              </option>
                              <option
                                data-alternate-values='["South Carolina"]'
                                value="SC"
                              >
                                South Carolina
                              </option>
                              <option
                                data-alternate-values='["South Dakota"]'
                                value="SD"
                              >
                                South Dakota
                              </option>
                              <option
                                data-alternate-values='["Tennessee"]'
                                value="TN"
                              >
                                Tennessee
                              </option>
                              <option
                                data-alternate-values='["Texas"]'
                                value="TX"
                              >
                                Texas
                              </option>
                              <option
                                data-alternate-values='["Virgin Islands"]'
                                value="VI"
                              >
                                U.S. Virgin Islands
                              </option>
                              <option
                                data-alternate-values='["Utah"]'
                                value="UT"
                              >
                                Utah
                              </option>
                              <option
                                data-alternate-values='["Vermont"]'
                                value="VT"
                              >
                                Vermont
                              </option>
                              <option
                                data-alternate-values='["Virginia"]'
                                value="VA"
                              >
                                Virginia
                              </option>
                              <option
                                data-alternate-values='["Washington"]'
                                value="WA"
                              >
                                Washington
                              </option>
                              <option
                                data-alternate-values='["District of Columbia"]'
                                value="DC"
                              >
                                Washington DC
                              </option>
                              <option
                                data-alternate-values='["West Virginia"]'
                                value="WV"
                              >
                                West Virginia
                              </option>
                              <option
                                data-alternate-values='["Wisconsin"]'
                                value="WI"
                              >
                                Wisconsin
                              </option>
                              <option
                                data-alternate-values='["Wyoming"]'
                                value="WY"
                              >
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
                            <Input
                              type="text"
                              
                              placeholder="PIN Code"
                              m='0.5rem'
                              value={info ? info.Pincode:""}
                            />
                        </Box>

                        <Box>
                          <Input
                            type="number"
                            placeholder="Phone"
                            required
                           m='0.5rem'
                            value={info ? info.Phone:""}
                          />
                        </Box>
                      </Box>
                    </Collapse>
                  </Box>
                </Box>
              </Box>

            </Box>

             <Box display='flex' justifyContent='space-between' p='1%' >
              <Box display='flex' p='2%'>
                <Text mt='0.2rem'>
                  <MdOutlineArrowBackIosNew size='1rem' />
                </Text>
                <Text fontSize='0.9rem'>
                  <Link to="/checkout">{Texts.RETURN_INFORMATION}</Link>
                </Text>
              </Box>
              <Box>
                <Button
                  onClick={() => {
                    setpayNow(true);
                  }}
                  bg='#A6CE3A' color='#fff'
                >
                  <Link to="/payment">
                    {payNow ? (
                      <Image src={gif} alt="images"/>
                    ) : (
                      "Pay Now"
                    )}
                  </Link>
                </Button>
              </Box>
            </Box>

            <hr></hr>
            <Box display='flex' fontSize='0.9rem' gap='1rem' >
              <Text>{Texts.REFUND_POLICY}</Text>
              <Text>{Texts.SHIPPING_POLICY}</Text>
              <Text>{Texts.PRIVACY_POLICY}</Text>
              <Text>{Texts.TERMS_OF_SERVICE}</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <CheckoutPayment />
        </Box>
      </Box>
  );
};

export default PaymentPage;

import React,{useEffect, useState} from "react";
import RightDivShop from "../RightDivShop";
import { useSelector, useDispatch } from "react-redux";
import { getHimalaya, getHimalayaData } from "../../../Redux/AppReducer/action";
import { Texts } from "../../../Common/constants";
import Filter from "./Filter";
import { Box, Image, Select, Text } from "@chakra-ui/react";

const Himalaya = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector((store) => store.AppReducer.products);
  const [data, setData] = useState(filterArray);

  useEffect(() => {
    dispatch(getHimalaya());
  }, [dispatch]);

  
  const handleSort = (e) => {
    let data2 = filterArray.sort((a, b) => {
      if (e === "priceasc") {
        return a.price - b.price;
      } else if (e === "pricedesc") {
        return b.price - a.price;
      } else if (e === "nameasc") {
        return a.name.localeCompare(b.name);
      } else if (e === "namedesc") {
        return b.name.localeCompare(a.name);
      }
    });
    setData([...data2]);
  };

  const queryData = (elm) => {
    dispatch(getHimalayaData(elm));
  } 
  
  return (
    <Box>
      <Box w='100%'>
        <Image src='https://i.shgcdn.com/3e8794b1-72dc-43ee-ad39-09cf5c44269b/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='cover'
        height={'30rem'}
        width={'100%'}
        mt='11.2rem'
        />
      </Box>
      <Box>
        <Text fontSize='3rem' fontWeight='540' textAlign='center' padding='2rem'>
          {
            filterArray.length === 14? "Oral Products" 
            : filterArray.length === 38? "Herbal Supplements" 
            : filterArray.length === 8? "Personal Care" 
            : "Himalaya"
          }
          </Text>
      </Box>
      <Box ml='70%'>
        <Select w='54%' color='#00AFEF'outline='1px solid #00AFEF'
        onChange={(e) => handleSort(e.target.value)}
        >
          <option value="Featured">{Texts.FEATURED}</option>
          <option value="BestSelling">{Texts.BEST_SELLING}</option>
          <option value="nameasc">{Texts.N_ASC} </option>
          <option value="namedesc">{Texts.N_DSC} </option>
          <option value="priceasc">{Texts.P_ASC} </option>
          <option value="pricedesc">{Texts.P_DSC} </option>
        </Select>
      </Box>
      <Box>
        <Box>
          <Filter queryData={queryData} />
        </Box>
        <Box className="right_div">
          <RightDivShop data={filterArray} />
        </Box>
      </Box>
    </Box>
  );
};

export default Himalaya;

import React,{useEffect, useState} from "react";
import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { getMamaData, getMamaearth } from "../../../Redux/AppReducer/action";
import { Texts } from "../../../Common/constants";
import Filter from "./Filter";
import { Box, Image, Select, Text } from "@chakra-ui/react";

const Mamaearth = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector((store) => store.AppReducer.products);
  const [data, setData] = useState(filterArray);

  useEffect(() => {
    dispatch(getMamaearth());
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
    dispatch(getMamaData(elm));
  } 
  
  return (
    <Box>
      <Box w='100%'>
        <Image src='https://images.ctfassets.net/66mrrren2unf/5bheI8C148KnbBZDn9yQas/df3e25da13502be5d2b3884ce13a2dc5/desktop.jpg?q=40' alt='logo'
        height={'100%'}
        width={'100%'}
        mt='13rem'
        />
      </Box>
      <Box>
        <Text fontSize='3rem' fontWeight='540' textAlign='center' padding='2rem'>
          {
            filterArray.length === 16? "Makeup"
            : filterArray.length === 25? "Baby" 
            : filterArray.length === 18? "Body" 
            : "Mamaearth"
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
          <Card data={filterArray} />
        </Box>
      </Box>
    </Box>
  );
};

export default Mamaearth;

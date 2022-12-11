import * as types from "./actionTypes";
import axios from 'axios';

const getHimalayaRquest = () => {
    return {
        type: types.FETCH_HIMALAYA_REQUEST,
    }
}

export const getHimalaya = () => (dispatch) => {
    dispatch(getHimalayaRquest());
    return axios
    .get("https://json-mock-server-rajatsahu18.vercel.app/himalaya")
    .then((res) => {
        return dispatch ({
            type: types.FETCH_HIMALAYA_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        return dispatch ({
            type: types.FETCH_HIMALAYA_FAILIURE,
        });
    })
}

const getMamaearthRquest = () => {
    return {
        type: types.FETCH_MAMAEARTH_REQUEST,
    }
}

export const getMamaearth = () => (dispatch) => {
    dispatch(getMamaearthRquest());
    return axios
    .get("https://json-mock-server-rajatsahu18.vercel.app/mamaearth")
    .then((res) => {
        return dispatch({
            type: types.FETCH_MAMAEARTH_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        return dispatch({
            type: types.FETCH_MAMAEARTH_FAILIURE,
        });
    })
}


const getCategoryProductsRquest = () => {
    return {
        type: types.FETCH_CATEGORY_PRODUCTS_REQUEST,
    }
}

export const getHimalayaData = (query) => async (dispatch) => {
    dispatch(getCategoryProductsRquest());
    try {
      let data = await axios.get(`https://json-mock-server-rajatsahu18.vercel.app/himalaya?q=${query}`)
       dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: data.data });
    }
    catch (e) {
        dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_FAILURE })
        console.log("e:",e);
    }
}

export const getMamaData = (query) => async (dispatch) => {
    dispatch(getCategoryProductsRquest());
    try {
        let data = await axios.get(`https://json-mock-server-rajatsahu18.vercel.app/mamaearth?q=${query}`)
        dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_SUCCESS, payload: data.data });
    }
    catch (e) {
        dispatch({ type: types.FETCH_CATEGORY_PRODUCTS_FAILURE })
        console.log("e:",e);
    }
}


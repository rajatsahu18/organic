import * as types from "./actionTypes";

const initState = {
    products: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    
    switch (type) 
    {
        case types.FETCH_HIMALAYA_REQUEST:
            return {
            ...state,
            isLoading: true,
            isError: false,
            };

        case types.FETCH_HIMALAYA_SUCCESS:
            return {
            ...state,
            products: payload,
            isLoading: false,
            isError: false,
            };

        case types.FETCH_HIMALAYA_FAILIURE:
            return {
            ...state,
            isLoading: false,
            isError: true,
            };

        case types.FETCH_MAMAEARTH_REQUEST:
            return {
            ...state,
            isLoading: true,
            isError: false,
            };

        case types.FETCH_MAMAEARTH_SUCCESS:
            return {
            ...state,
            products: payload,
            isLoading: false,
            isError: false,
            };

        case types.FETCH_MAMAEARTH_FAILIURE:
            return {
            ...state,
            isLoading: false,
            isError: true,
            };


        case types.FETCH_CATEGORY_PRODUCTS_REQUEST:
            return {
            ...state,
            isLoading: true,
            isError: false,
            };

        case types.FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
            ...state,
            products: payload,
            isLoading: false,
            isError: false,
            };

        case types.FETCH_CATEGORY_PRODUCTS_FAILURE:
            return {
            ...state,
            isLoading: false,
            isError: true,
            };
        default:
            return state;
    }
}    

export { reducer };
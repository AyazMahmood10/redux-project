import {ADD_TO_CART} from '../Constant'

export const addToCart = (value) => {
    return {
        type: ADD_TO_CART,
        data: value
    }
} 
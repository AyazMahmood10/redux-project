import {ADD_TO_CART} from '../Constant'

export const addToCart = (value) => { //This function tells the reducer what function is to be called. It contains two properties. one is type that will always be a string and the 2nd one is data received from containers.
    return {
        type: ADD_TO_CART,//type    
        data: value //data
    }
} 
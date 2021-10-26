import { ADD_TO_CART } from "../Constant";


const initialState = () => {   //In reducer we define the initial state of the application.
    cartData: []
};


const cartItems = (initialState, actions) => {  //here actions is by default fetched from actions
    switch(actions.type){
        case ADD_TO_CART: //to compare the type of actions as defined the actions file
            return{
                ...initialState,
                cartData: actions.data //setting the data which we got from actions
            }
        break;
        default:
            return initialState
    }
}

export default cartItems
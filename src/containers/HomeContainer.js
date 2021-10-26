//This container is a component which we will use to map the app.js file and the other home component. We won't directly import the HomeComponent to App so that we can import it to HomeContainer and from there we can transfer it to App and also we can connect it to redux

import { connect } from "react-redux"; //to connect our React to Redux
import HomeComponents from "../components/HomeComponents";
import {addToCart} from '../service/actions/actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponents)
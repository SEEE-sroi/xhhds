 
 
import { BUY_CAKE } from "../Actions/CartTypes";
 

const initialState={
    numOfCakes : 10
}
const CartReducer = (state = initialState ,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes -1 
        }
        default :return state
    }
}
export default CartReducer;
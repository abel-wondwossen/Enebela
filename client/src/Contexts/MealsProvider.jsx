import MealsContext from "./MealsContext"
import { useReducer } from "react" 
const defaultReducer ={
    item: [],
    totalAmount:0,
}
const MealsReducer = (state,action) =>{
    if(action.type==='Add_item'){
        const updatedItems = state.item.concat(action.item)
        const updatedTotalAmount= action.totalAmount+action.item.price + action.item.amount;
        return{
            item:updatedItems,
            totalAmount:updatedTotalAmount,
        }
    }
    return defaultReducer
}
const MealsProvider = props=>{
const[mealsState,dispatchMealsAction ]=useReducer(MealsReducer,defaultReducer)
const addItemToCart=item=>{
    dispatchMealsAction({type:'Add_item',item:item});
}    
const removeItemFromCart=(id)=>{
    dispatchMealsAction({type:'remove_item',id:id});
}    

const Foodcontext={
    items: mealsState.item,
    totalAmount: mealsState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
    }
return(
<MealsContext.Provider value={Foodcontext}>
    {props.children}
</MealsContext.Provider>
)
}
export default MealsProvider



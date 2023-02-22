import './Meals.css'
import Foodlist from '../FoodList/Foodlist';
function Meals(props) {
 const food = [
    {
        id:1,
        name:'shiro',
        type:'Ta',
        price:70,
    },
    {
        id:2,
        name:'Pasta',
        type:'Ta',
        price:10,
    },
    {
        id:3,
        name:'ዶሮ ወጥ',
        type:'fa',
        price:90,
    },
    {
        id:4,
        name:'በርግ',
        type:'fa',
        price:160,
    },
    {
        id:5,
        name:'nodules',
        type:'Ta',
        price:170,
    },
 ]
   const foodcart = food.map((fo)=>
   <Foodlist key ={fo.id} id={fo.id} name={fo.name}price={fo.price}/>)
   const foodTa = food.map((fo)=>
    fo.type==='Ta'&&<Foodlist key ={fo.id} id={fo.id} name={fo.name}price={fo.price}/>)
    const foodFa = food.map((fo)=>
   fo.type==='fa'&&<Foodlist key ={fo.id} id={fo.id} name={fo.name}price={fo.price}/>)
    return (
        <div>
            {props.tab==='All'&&foodcart}
            {props.tab==='Ta'&&foodTa}
            {props.tab==='fa'&&foodFa}
        </div>
    );
}

export default Meals;

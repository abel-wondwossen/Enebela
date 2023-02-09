import './Meals.css'
import Foodlist from '../FoodList/Foodlist';
function Meals(props) {
 const food = [
    {
        id:1,
        name:'shiro',
        type:'fa',
        price:150,
    },
    {
        id:2,
        name:'shiro',
        type:'fa',
        price:100,
    },
    {
        id:3,
        name:'shiro',
        type:'fa',
        price:90,
    },
    {
        id:4,
        name:'shiro',
        type:'fa',
        price:160,
    },
    {
        id:5,
        name:'shiro',
        type:'fa',
        price:170,
    },
 ]
   const foodcart = food.map((fo)=><Foodlist
   key={fo.id}
   id={fo.id}
   name={fo.name}
   price={fo.price}
   />)
    return (
        <div>
          {foodcart}
        </div>
    );
}

export default Meals;

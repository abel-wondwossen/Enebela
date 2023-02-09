import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import CartItem from './CartItem';
import MealsContext from '../../Contexts/MealsContext';
function Carts(props) {
    const mealsCtx = useContext(MealsContext);
    const totalamount = `$${mealsCtx.totalamount.toFixed(2)}`;
    const hasItem=mealsCtx.item.length>0;
    const cartItemRemoveHandler =(id)=>{
        mealsCtx.removeItem(id);
    }
    const cartItemAddHandler =(item)=>{
        mealsCtx.addItem({...item,amount: 1})

    }
    const CartItems=(
        mealsCtx.item.map((item)=>(
            <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            nRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))
    )
    return (
        <div>
            {CartItems}
            {totalamount}

        {hasItem && <Button>Order</Button>}
        </div>
    );
}

export default Carts;
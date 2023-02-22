import { useContext } from 'react';
import MealsContext from '../../Contexts/MealsContext';
import './Cartitems.css'
import {Text,Stack} from '@chakra-ui/react'
import React from 'react';
import ContactModal from '../Layouts/Modal/ContactModal';
import CartShower from './Cartsshower/CartShower'

function CartItem(props) {
const mealsCtx = useContext(MealsContext);
const totalAmount =`$${mealsCtx.totalamount.toFixed(2)}`;
const hasItem = mealsCtx.items.length>0;
const items = mealsCtx.items.map((item) =>
<CartShower 
key={item.id}
name={item.name}
price={item.price}
amount={item.amount}/> )
    return (
        <div>  
        {items}
        <Stack>
        <div className="totalamount">
       <Text>Total amount</Text>
       <Text>{totalAmount}</Text>
       </div>
    </Stack>
{hasItem && <ContactModal />}
        </div>
    );
}

export default CartItem;
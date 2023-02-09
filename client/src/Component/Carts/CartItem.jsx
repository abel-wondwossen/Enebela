import { Button } from '@chakra-ui/react';
import React from 'react';

function CartItem(props) {
    // const price = `$${props.price.toFixed(2)}`;
    return (
        <div>
            {props.name}
            {props.price}
            {props.amount}
            <Button onClick={props.onRemove}>-</Button>
            <Button onClick={props.onAdd}>+</Button>

        </div>
    );
}

export default CartItem;
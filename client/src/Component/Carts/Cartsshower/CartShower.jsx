import React from 'react';
import './CartShower.css'
import { Button, Card, CardBody,Heading} from '@chakra-ui/react'
function CartShower(props) {
     const price= `$${props.price.toFixed(2)}`
    return (
        <div cal key={props.id}>
 <Card>
  <CardBody className='carts'>
    <Heading size='xs' textTransform='uppercase'>
          {props.name}
     </Heading>
     <Heading size='xs' textTransform='uppercase'>
          {price}
     </Heading>  
     <Heading size='xs' textTransform='uppercase'>
          {props.amount}
     </Heading> 
     <div>
      <Button onClick={props.onAdd} colorScheme='teal'>+</Button>
      <Button onClick={props.onRemove} colorScheme='facebook'>-</Button>
      </div> 
  </CardBody>
</Card>
            
        </div>
    );
}

export default CartShower;
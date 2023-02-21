import React from 'react';
import { Card, CardBody,Heading} from '@chakra-ui/react'
function CartShower(props) {
    return (
        <div key={props.id}>
 <Card>
  <CardBody>
    <Heading size='xs' textTransform='uppercase'>
          {props.name}
     </Heading>  
     <Heading size='xs' textTransform='uppercase'>
          {props.price}
     </Heading>  
     <Heading size='xs' textTransform='uppercase'>
          {props.amount}
     </Heading>  
      
  </CardBody>
</Card>
            
        </div>
    );
}

export default CartShower;
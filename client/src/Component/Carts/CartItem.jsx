import { useContext } from 'react';
import MealsContext from '../../Contexts/MealsContext';
import { Button ,Card, CardHeader, CardBody, Text,Heading,Box,Stack,StackDivider } from '@chakra-ui/react'
import React from 'react';

function CartItem(props) {
const mealsCtx = useContext(MealsContext);
const totalAmount =`$${mealsCtx.totalamount.toFixed(2)}`;

console.log('hello')
    return (
        <div>
           <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
     
        {mealsCtx.items.map((item) => <Box> <Heading size='xs' textTransform='uppercase'>{(item.name)}
        </Heading></Box>)}
        
     
      
    </Stack>
  </CardBody>
</Card>
        </div>
    );
}

export default CartItem;
import { useContext } from 'react';
import MealsContext from '../../Contexts/MealsContext';
import { Button ,Card, CardHeader, CardBody, Text,Heading,Box,Stack,StackDivider } from '@chakra-ui/react'
import React from 'react';

function CartItem(props) {
const mealsCtx = useContext(MealsContext);
const totalAmount = mealsCtx.totalamount;

    return (
        <div>
             <div>
                <Card>
  <CardHeader>
  </CardHeader>
            <CardBody>
            <Stack divider={<StackDivider />} spacing='10'>
        <Box>
        <Heading size='xs' textTransform='uppercase'>
            <Text>{totalAmount}</Text>
        </Heading>

        <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
        </Text>
        <Button onClick={props.onRemove}>-</Button>
            <Button onClick={props.onAdd}>+</Button>
 
        </Box> 
      
      </Stack>
      
      </CardBody>       
      </Card>  
        </div>
          
        </div>
    );
}

export default CartItem;
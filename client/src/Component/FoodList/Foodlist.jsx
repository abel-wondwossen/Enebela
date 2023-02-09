import React from 'react';
import { useContext } from 'react';
import MealsContext from '../../Contexts/MealsContext';
import { Card, CardHeader, CardBody, Text,Heading,Box,Stack,StackDivider } from '@chakra-ui/react'
import Mealitemform from '../MealItemform/Mealitemform';
function Foodlist(props) {
    const price = `$${props.price.toFixed(2)}`;
    const mealsctx = useContext(MealsContext);
    const addToCartHandler= amount=>{
        mealsctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return (
        <div>
                <Card>
  <CardHeader>
  </CardHeader>
            <CardBody>
            <Stack divider={<StackDivider />} spacing='10'>
        <Box>
        <Heading size='xs' textTransform='uppercase'>
            {props.name}
            <Text>{price}</Text>
        </Heading>

        <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
        </Text> 
    <Mealitemform id ={props.id} onAddtocart={addToCartHandler} />   
        </Box> 
      </Stack>
      </CardBody>       
      </Card>  
        </div>
    );
}

export default Foodlist;
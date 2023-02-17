import React from 'react';
import './Foodlist.css'
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
        <div className="name">
         <div>{props.name} </div>
   <Text>{price}</Text></div>
        </Heading>

    <Mealitemform id ={props.id} onAddtocart={addToCartHandler} />   
        </Box> 
      </Stack>
      </CardBody>       
      </Card>  
        </div>
    );
}

export default Foodlist;
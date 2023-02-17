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
        <div className='card-food'>
                <Card>
  <CardHeader>
  </CardHeader>
            <CardBody>
            <Stack divider={<StackDivider />} spacing='2'>
        <Box>
        <div className="name">
        <Heading size='xs' textTransform='uppercase'>
         <div>{props.name} </div>
   <Text>{price}</Text>
        </Heading>

    <Mealitemform id ={props.id} onAddtocart={addToCartHandler} />   
    </div></Box> 
      </Stack>
      </CardBody>       
      </Card>  
        </div>
    );
}

export default Foodlist;
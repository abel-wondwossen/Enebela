import { useContext } from 'react';
import MealsContext from '../../Contexts/MealsContext';
import './Cartitems.css'
import {Card, CardBody, Text,Heading,Box,Stack,StackDivider } from '@chakra-ui/react'
import React from 'react';
import ContactModal from '../Layouts/Modal/ContactModal';

function CartItem(props) {
const mealsCtx = useContext(MealsContext);
const totalAmount =`$${mealsCtx.totalamount.toFixed(2)}`;

    return (
        <div>
           <Card>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
        {mealsCtx.items.map((item) => <Box> <Heading size='xs' textTransform='uppercase'>{(item.name)}
        </Heading></Box>)}
        <div className="totalamount">
       <Text>Total amount</Text>
       <Text>{totalAmount}</Text>
       </div>
    </Stack>
  </CardBody>
</Card>
<ContactModal />
        </div>
    );
}

export default CartItem;
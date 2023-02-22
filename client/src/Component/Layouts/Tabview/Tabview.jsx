import React from 'react';
import './Tabview.css'
import MealsContext from '../../../Contexts/MealsContext';
import { useContext } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Badge } from '@chakra-ui/react'
import Meals from '../../Meals/Meals';
import CartItem from '../../Carts/CartItem';

function Tabview(props) {
  const mealsCtx = useContext(MealsContext);
  const numMeals= mealsCtx.items.reduce((currNum,items) =>{
    return (currNum + items.amount)},0)
    return (
  <div className='tabs'>
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList >
    <Tab>ሁሉም ምግቦች</Tab>
    <Tab>የጾም</Tab>
    <Tab>የፍስግ</Tab>
    <Tab>ይዘዙ
      <Badge ml='1' fontSize='0.8em' colorScheme='red'>
        {numMeals}
      </Badge>
  </Tab>
    
  </TabList>
  <TabPanels>
    <TabPanel>
      <Meals tab='All'/>
    </TabPanel>
    <TabPanel>
    <Meals tab='fa' />
    </TabPanel>
    <TabPanel>
    <Meals tab='Ta' />
    </TabPanel>
    <TabPanel>
      <CartItem />
    </TabPanel>
  </TabPanels>
</Tabs>     
        </div>
    );
}

export default Tabview;
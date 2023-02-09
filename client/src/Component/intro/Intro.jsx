import React from 'react';
import {  Card, CardBody, Text } from '@chakra-ui/react'
import './Intro.css'
import img from '../../assets/Images/eth_food.jpg'

function Intro(props) {
    return (<>
        <div className='summary'  style={{backgroundImage: `url(${img})`}} >
</div>
<Card className='Intro' >
  <CardBody className='intro-bg'>
    <Text className='intro-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Quaerat sunt error tempora reiciendis distinctio numquam, 
        blanditiis animi sit consectetur perferendis ullam amet corrupti
       iure exercitationem aliquam explicabo.
         Labore, accusamus quaerat?</Text>
  </CardBody>
</Card>
        
</>
    );
}

export default Intro;
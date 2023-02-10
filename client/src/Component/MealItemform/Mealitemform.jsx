import React from 'react';
import { useRef,useState } from 'react';
import './MealItemForm.css'
import { FormControl,NumberInput,
    NumberInputField,NumberInputStepper,
    NumberIncrementStepper,NumberDecrementStepper,
     Button } from '@chakra-ui/react';
// import ContactModal from '../Layouts/Modal/ContactModal';
function Mealitemform(props) {
    const [validAmount,setValidAmount] = useState(true);
    const enteredAmountRef =useRef();
    const submitHandler = (event) =>{
      event.preventDefault();

        const enteredAmount =enteredAmountRef.current.value;
        const enteredAmountNUmber =+enteredAmount;
        if(enteredAmount.trim().length===0||enteredAmount<1||enteredAmount>5){
            setValidAmount(false)
            return;     
        }
        props.onAddtocart(enteredAmountNUmber);
    }
    return (
            <form className='Form-control' onSubmit={submitHandler}>
            <div>
           <FormControl>
  <NumberInput width={20} max={5} min={1}>
    <NumberInputField
    ref={enteredAmountRef} />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl> 
</div>
<div>
<Button colorScheme='teal'type='submit'>+add</Button>
{/* <ContactModal /> */}
</div>
{!validAmount&&<p className='invalid-text'>please enter valid amount</p>}
</form>
  );
}

export default Mealitemform;
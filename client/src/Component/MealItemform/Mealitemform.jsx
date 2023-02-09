import React from 'react';
import { useRef,useState } from 'react';
import './MealItemForm.css'
import { FormControl,NumberInput,
    NumberInputField,NumberInputStepper,
    NumberIncrementStepper,NumberDecrementStepper,
     Button } from '@chakra-ui/react';
function Mealitemform(props) {
    const [validAmount,setValidAmount] = useState(true);
    const enteredAmountRef =useRef();
    const submitHandler = (event) =>{
        const enteredAmount =enteredAmountRef.current.value;
        const enteredAmountNUmber =+enteredAmount;
        event.preventDefault();
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
</div>
{!validAmount&&<p className='invalid-text'>please enter valid amount</p>}
</form>
  );
}

export default Mealitemform;
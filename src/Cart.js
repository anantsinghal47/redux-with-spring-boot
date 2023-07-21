import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getTotalItems, getTotalPrice } from './redux/slices/cart'
import { Box, Button, Typography } from '@mui/material';

const Cart = () => {

   const totalPrice = useSelector(getTotalPrice);
   const totalItems = useSelector(getTotalItems);
   const dispatch = useDispatch();

   const handleAddToCart = () => {

    const obj = {
        name : 'Maggie',
        price : 120
    }
    try{
        
            dispatch(addToCart({
                item : obj
            }))
    }

   

   catch(e){
    console.log(e);
   }

}


  return (
    <div>
        {totalPrice},
        {totalItems.length}
        <ul>
            <li>
                <Box>
                    
                    <Typography>Maggie</Typography>
                    <Button onClick={handleAddToCart} >
                      Add
                    </Button>
                </Box>
            </li>
        </ul>
    </div>
  )
}

export default Cart

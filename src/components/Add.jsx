import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Add = () => {
  const [form, setForm]=useState(
    {
      productName:'',
      description:'',
      price:'',
      category:''
      
    })
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <Box
      components="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          name="productName"
          value={form.productName}
          onChange={valueCap}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Description"
          name='description'
          value={form.description}
          onChange={valueCap}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Price"
          name='price'
          value={form.price}
          onChange={valueCap}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Category"
          name='category'
          value={form.category}
          onChange={valueCap}
        />
        <br></br>
        <Button variant="contained" color="success" onClick={valueAdd}>SUBMIT
        </Button>
        <br></br>     
    </div>
    </Box>
  )

}
export default Add
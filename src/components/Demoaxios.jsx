import React from 'react'
import {Paper, Table, TableBody, TableCell, TableRow, TableHead, TableContainer} from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Demoaxios = () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setRows(res.data);
    })    
    },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>TITLE</TableCell>
          <TableCell align="right">PRICE</TableCell>
          <TableCell align="right">CATEGORY</TableCell>
          <TableCell align="right">IMAGE</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            {row.title}
            </TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right"><img src={row.image} style={{width:'100px', height:'auto'}}/></TableCell>
        
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}  

export default Demoaxios
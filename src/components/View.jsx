import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


let rows=[
    {title:'', 
    price:'',
    category:'',
    image:''}
]

const View = ()=> {
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell align="left">PRICE</TableCell>
            <TableCell align="left">CATEGORY</TableCell>
            <TableCell align="left">IMAGE</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left"><img src={row.image} style={{width:'100px', height:'auto'}}/></TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   )
  }
  export default View
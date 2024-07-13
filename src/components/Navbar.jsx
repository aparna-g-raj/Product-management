import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { red } from '@mui/material/colors';


const Navbar = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{bgcolor:'yellow'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1,color:'black'}}>
              <b>HOME</b>
            </Typography>
            <Link to={'/'}><Button color="inherit" sx={{ flexGrow: 1,color:'black'}}> <b> VIEW </b> </Button></Link>
            <Link to={'/add'}><Button color="inherit" sx={{ flexGrow: 1,color:'black'}}> <b> ADD </b> </Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar 

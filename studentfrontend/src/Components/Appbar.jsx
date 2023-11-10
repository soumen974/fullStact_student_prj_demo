import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <Box >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"  
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Springboot with React Fullstack app 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
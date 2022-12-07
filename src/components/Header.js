import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" >Serrano</Link>
          </Typography>
          <ButtonGroup>
            <Button 
						  href="#"
              color="primary" 
              size="small" 
              variant="contained"
						  component={NavLink}
						  to="/login"
            >
              Login
            </Button>
            <Button 
              href="#"
              color="primary" 
              size="small" 
              variant="contained"
							component={NavLink}
							to="/register"
            >
              Cadastro
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
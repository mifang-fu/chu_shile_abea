import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {ButtonGroup, FormControlLabel} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green,orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    primary:{
      main:green[300],
    }
  },
});

const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg, #333, #999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'5px 30px',
    marginBottom:10,
  },
  
});

function CheckboxExample() {
  const [checked , setChecked]=React.useState();
  return(
    <div>
      <FormControlLabel
      control={<Checkbox
      checked={checked} 
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{'aria-labal':'secondary checkbox'}}
      />}
      label="HE"
      />
    </div>
  )
}

function ButtonS(){
  const classes=useStyles();
  return(
    <Button className={classes.root}>
      SHE
    </Button>
  )
}


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

            <Typography variant="h6" >
            但為君故
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
      </AppBar>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h1" component="h2" gutterBottom>
        載浮載沈
      </Typography>

        <ButtonS></ButtonS>

        <TextField label="Standard" variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        />
        <TextField label="Date" variant="filled" type ="date"/>
        
        <CheckboxExample>
          
        </CheckboxExample>
        <ButtonGroup>
        <Button startIcon={<SaveIcon />} size='medium' onClick ={()=>{alert('cliked') }}variant="contained" color="secondary">
            ME
        </Button>
        <Button startIcon={<DeleteIcon />} size='medium' onClick ={()=>{alert('cliked') }}variant="contained" color="primary">
            YOU
        </Button>
        </ButtonGroup>
        
        
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;

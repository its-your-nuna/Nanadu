import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../App.css'

import {
  AppBar,
  IconButton,
  Drawer,
  Link,
  Toolbar,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Sidedrawer from './Sidedrawer.js';
import CartSection from '../layout/MainLayout/Header/CartSection.js';

const headersData = (path) => [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Меню',
    href: '/allmeals',
  },
  {
    label: 'Рестораны',
    href: '/restorants',
  },
  {
    label: 'О нас',
    href: '/about',
  },
  {
    label: 'Сотрудничество',
    href: '/form',
  },

];

const useStyles = makeStyles({
  header: (props) => ({
    backgroundColor: 'white',
    position: props.pathname === '/' ? 'absolute' : 'static',
    display: props.pathname === '/login' ? 'none' : 'block',
    top: 0,
    left: 0,
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '79px',
    paddingLeft: '0px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  }),
  logo: {
    position:'absolute',
    top:'-15px',
    left:'30%',
    // left:'100px',
    width:'90px',
    '@media (max-width: 1500px)': {
      left: '25%',
    },
    '@media (max-width: 1400px)': {
      left: '15%',
    },
    '@media (max-width: 900px)': {
      left: '40vw',
    },
  },
  menuButton: {
    color:'black',
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    fontSize: '17px',
    marginLeft: '30px',
    textTransform: 'capitalize', 
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color:'inherit'
    },
  },
  menuButton2: {
    color:'#202794',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '17px',
    fontWeight: 600,
    marginLeft: '20px',
    textTransform: 'capitalize', 
    textDecoration: 'none',
    borderBottom: '3px #ff3e19 solid',
    '&:hover': {
      textDecoration: 'none',
      color:'#202794',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  drawerContainer: {
    padding: '5px 0px',
    width: '280px',
  },
  logButtons: {
    display: 'flex',
  },

  // signinButton: {
  //   borderRadius: '20px',
  //   textTransform: 'capitalize',
  //   fontWeight: 'bold',
  // },
  // loginButton: {
  //   fontWeight: 'bold',
  //   marginLeft: '20px',
  //   borderRadius: '20px',
  //   backgroundColor: 'white',
  //   textTransform: 'capitalize',
  // },
  // spacerLogo: {
  //   visibility: 'hidden',
  //   width: 'calc(100vw - 206px)',
  //   border: '1px solid red',
  //   marginRight: '-25px',
  // },
  // personIcon: {
  //   marginRight: '6px',
  // },
});

export default function Navbar() {
  const auth = useSelector((state) => state.authReducer);
  const location = useLocation();

  const {
    header,
    logo,
    menuButton,
    menuButton2,
    toolbar,
    drawerContainer,
    logButtons,
  } = useStyles(location);

  const [state, setState] = useState({
    mobileView: true,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
       
        <div>
        {femmecubatorLogo}
          {getMenuButtons()}
          </div>
     
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vw',
          marginRight: 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            {...{
              edge: 'start',

              color: 'black',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon sx={{fontSize:'24px',marginLeft:'20px'}}/>
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>
              <Sidedrawer onClose={handleDrawerClose} />
            </div>
          </Drawer>

          <div>{femmecubatorLogo}</div>
        </Box>

        <Box>
         
          {/* <CartSection /> */}
          {/* {auth.authenticated && <Notification />} */}
        </Box>
      </div>
    );
  };
  /**Logo */
  const femmecubatorLogo = (
    <Link
      {...{
        component: RouterLink,
        to: '/',
        underline:'none',
        color: 'inherit',
        style: { textDecoration: 'none' },
      }}
      
    >
      <img className={logo} src='nandu.png' />
    </Link>
  );
  const [myStyle, setMyStyle] = React.useState({});

  const handleClick = (id) => {
    console.log(myStyle)
    setMyStyle((prevState) => ({
      [id]: !prevState[id]
    }));
  };
  const getMenuButtons = () => {
    const { pathname } = useLocation();
    
    return headersData(pathname).map(({ label, href }, index) => {
      return (
        <Link
          
          key={index}
          onClick = { ()=>handleClick(index)}
          sx={{marginLeft:'30px',color:'black',
          '&:hover' : {
            color : 'black'
        }
      }}
          {...{   
            key: label,
            to: href,
            underline:'none',
            component: RouterLink,
            className: myStyle[index]?menuButton2:menuButton,
          }}
          // state={{ from: pathname, show: 'login' }}
        >
          {label}
        </Link>
      );
    });
  };

  return (

      <AppBar sx={{backgroundColor:'white'}} elevation={0} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>

  );
}

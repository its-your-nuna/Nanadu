import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Toolbar,
  Avatar,
  Button,
  List,
  Box,
  styled,
  Typography,
  Link,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CloseRounded } from '@mui/icons-material';

// import { BiHomeCircle } from 'react-icons/bi';
// import { IoFastFood } from 'react-icons/io5';
// import { MdContacts } from 'react-icons/md';
// import { AiOutlineUser } from 'react-icons/ai';

// links for the side nav
const links = [
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

// style const
const useStyles = makeStyles((theme) => ({
  label: {
    marginRight: '20px',
  },
  selected: {
    color: '#1275D1 !important',
    background: '#E2ECF6 !important',
    '& :hover': {
      color: 'inherit',
      background: '#E2ECF6',
    },
  },
  drawerheading: {
    fontWeight: '600',
    fontSize: '1.6rem',
    fontFamily: 'mulish',
    color: '#1275D1',
  },
  button: {
    
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    borderRadius: '0',
    padding: '10px 8px 10px 20px',
    fontSize:'24px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    background: 'transparent',
    color: 'black',
    width: '280px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color:'black'
    },
  },
  button2: {
    
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    borderRadius: '0',
    padding: '10px 8px 10px 20px',
    fontSize:'24px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    background: 'transparent',
    textDecoration:'none',
    color:'#202794',
    borderBottom: '3px #ff3e19 solid',
    '&:hover': {
      textDecoration: 'none',
      color:'#202794',
     
    },
  },
  usersection: {
   
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    margin: '0 auto',
    borderRadius: '15px',
  },
  xmark:{
    marginLeft:'200px',
    cursor:'pointer',
    fontSize:'24px'
  }
}));

const ListStyle = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export default function Sidedrawer(props) {
  const { xmark, button,button2, usersection, selected } = useStyles();
  const auth = useSelector((state) => state.authReducer);

  const userData = () => {
    return (
     
      <Box className={usersection}>
         <CloseRounded
         onClick={props.onClose} sx={{fontSize:'24px'}} className = {xmark}/>
         {/* <i class="fa-solid fa-xmark"></i>
          */}
         <img src='nandu.png' width='100px'/>
      </Box>
    );
  };
  const [myStyle, setMyStyle] = React.useState({});

  const handleClick = (id) => {
    console.log(myStyle)
    setMyStyle((prevState) => ({
      [id]: !prevState[id]
    }));
  };
  return (
    <>
     
      {userData()}
      {/* List of links */}
      <ListStyle>
        {links.map((link, index) => (
          <Link
            sx={{color:'black'}}
            key={index}
            className={myStyle[index]?button2:button}
            component={NavLink}
            to={link.href}
            underline = 'none'
            onClick = { ()=>{handleClick(index);}}
            
          >
            {link.label}
          </Link>
        ))}
       
      </ListStyle>
    </>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box,styled,List, Typography,Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FcPodiumWithAudience } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { IconBrandGmail, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons';

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
const links2 = [
  {
    label: 'Улица 1',
    href: '/',
  },
  {
    label: 'Улица 2',
    href: '/allmeals',
  },
  
];
const links3 = [
  {
    label: <IconBrandInstagram style={ {marginLeft:'0px',
    cursor:'pointer',
    fontSize:'24px'}}/>,
    href: '/',
  },
  {
    label: <IconBrandWhatsapp style={ {marginLeft:'20px',
    cursor:'pointer',
    fontSize:'24px'}}/>,
    href: '/allmeals',
  },
  {
    label: <IconBrandGmail
    style={ {marginLeft:'20px',
    cursor:'pointer',
    fontSize:'24px'}}/>,
    href: '/allmeals',
  },
  
];



const ListStyle = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
const useStyles = makeStyles({
  root: (props) => ({
    display:'flex',
    alignItems: 'center',
    backgroundPosition: 'right',
    justifyContent: 'center',
    marginTop:'50px',

  
    '@media screen and (max-width: 759px) ': {
      flexDirection: 'flex-wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '@media screen and (max-width: 30em)': {
      padding: '30px 10px !important',
      marginTop: '40px',
    },
  }),
  root_left: {
    flex: '0.6',
    //  border: '1px solid red',

    '& > :nth-child(1)': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& > :nth-child(2)': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.3rem',
        fontWeight: '500',
        marginTop: '0px',
      },
    },
    '& > :nth-child(2)': {
      marginTop: '20px',
      width: '70%',
      '@media screen and (max-width: 30em)': {
        marginTop: '5px',
      },
    },
    '@media screen and (max-width: 30em)': {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
    },
  },
  root_right: {
    width:'200px',
    height:'250px',
    
  },
  leaderBoard_left_h1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '50px',
    color:'black',
    '@media (max-width: 900px)': {
      fontSize: '1.5rem',
    },
  },
  about_descriptions: {
   
    fontFamily: 'Inter, sans-serif',
    color:'black',
    fontSize: '1.5rem',
    marginTop: '10px',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '1.2rem',
    },
  },
});

export default function Footer() {
  const location = useLocation();
  const { root, about_descriptions,leaderBoard_left_h1, root_right, recommendation_link } = useStyles(
    location
  );
  return (
    <Paper className={root}>
     
      <Box className={root_right}>
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '50px',
          color:'black',
          '@media (max-width: 900px)': {
            fontSize: '1.5rem',
          }
        }}
            >Страницы</Typography>
        <Box display="flex" flexDirection="column">        
        {links.map((link, index) => (
          <Link
            key={index}
            className={about_descriptions}
            component={NavLink}
            to={link.href}
            underline = 'hover'
            onClick = { ()=>{handleClick(index);}}
            
          >
            {link.label}
          </Link>
        ))}
 

         
        </Box>
      </Box>
      <Box className={root_right}>
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '50px',
          color:'black',
          '@media (max-width: 900px)': {
            fontSize: '1.5rem',
          },
        }}>Наши рестораны</Typography>
        <Box display="flex" flexDirection="column">        
        {links2.map((link, index) => (
          <Link
          className={about_descriptions}
            component={NavLink}
            to={link.href}
            underline = 'hover'
            onClick = { ()=>{handleClick(index);}}
            
          >
            {link.label}
          </Link>
        ))}
 

         
        </Box>
      </Box>
      <Box className={root_right}>
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '50px',
          color:'black',
          '@media (max-width: 900px)': {
            fontSize: '1.5rem',
          },
        }}>Наши соц сети</Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between">        
        {links3.map((link, index) => (
          <Link
            key={index}
            className={about_descriptions}
            component={NavLink}
            to={link.href}
            underline = 'hover'
            onClick = { ()=>{handleClick(index);}}
            
          >
            {link.label}
          </Link>
        ))}
 

         
        </Box>
      </Box>
    </Paper>
  );
}

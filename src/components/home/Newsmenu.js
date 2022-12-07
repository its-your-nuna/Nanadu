import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import Homemenuitem from './Newsmenuitem';
import menudata from '../../utils/newsdata';

const useStyles = makeStyles((theme) => ({
  homemenu: {
    //padding: '50px 0px',
    // paddingBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      // padding: '50px 0px',
    },
  },
  leaderBoard_left_h1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '50px',
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },
  },
  homemenu_menu: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  homemenu_explore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homemenu_data: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
   
    '@media (max-width: 500px)': {
      paddingTop: '0px',
    },
  },
  button: {
    borderRadius: '20px',
    fontWeight: 'bold',
    width: '170px',
    marginTop: '25px',
    fontSize: '1.2rem',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
    '&:hover': {
      background: 'white',
      color:'#202794'
    },
  },
}));

export default function Homemenu() {
  const {
    leaderBoard_left_h1,
    homemenu_menu,
    homemenu_explore,
    homemenu,
    button,
    homemenu_data,
  } = useStyles();
  return (
    <div className={homemenu}>
      <div className={homemenu_explore}>
        
        <Typography className={leaderBoard_left_h1} variant="h2" component="h1">
          Последние новости
        </Typography>
      </div>

      <div className={homemenu_data}>
        {menudata.map((data, index) => (
          <Homemenuitem key={index} {...data} />
        ))}
      </div>
      <Button
        disableElevation
        className={button}
       
        endIcon={<ArrowRightAltIcon />}
        component={Link}
        to={'/news'}
      >
        Посмотреть все
      </Button>
    </div>
  );
}

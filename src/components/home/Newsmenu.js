import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import Homemenuitem from './Newsmenuitem';
import menudata from '../../utils/newsdata';

const useStyles = makeStyles({
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
    color:'black',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
    '&:hover': {
      background: 'white',
      color:'#202794'
    },
  },
});

export default function Homemenu() {
  const classes = useStyles();
  return (
    <div className={classes.homemenu}>
      <div className={classes.homemenu_explore}>
        
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '3rem',
          fontWeight: 'bold',
          marginTop: '50px',
          textAlign: 'center',
          color:'#202794',
          '@media (max-width: 500px)': {
            fontSize: '2.5rem',
          },
        }} variant="h2" component="h1">
          Последние новости
        </Typography>
      </div>

      <div className={classes.homemenu_data}>
        {menudata.map((data, index) => (
          <Homemenuitem key={index} {...data} />
        ))}
      </div>
      <Button
        disableElevation
        sx={{
          borderRadius: '20px',
          fontWeight: 'bold',
          width: '170px',
          marginTop: '25px',
          fontSize: '1.2rem',
          textTransform: 'lowercase',
          background: 'white',
          color:'black',
          border: '1px solid grey',
          '&:hover': {
            background: 'white',
            color:'#202794'
          },
        }
        }
        endIcon={<ArrowRightAltIcon />}
        component={Link}
        to={'/news'}
      >
        Посмотреть все
      </Button>
    </div>
  );
}

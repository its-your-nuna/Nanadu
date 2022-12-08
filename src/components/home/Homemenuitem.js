import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  home_menu_item: {
    border: '1px solid #F2F2F2',
    height: '350px',
    width: '250px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    padding: '7px',
    // marginRight: '20px',
    marginTop: '50px',
    transition: 'all 0.6s ease-in-out',
    '&:hover': {
      background: '#f93b1d',
      '& button': {
        background: 'white',
        color:'black'
      },
    },
    '@media (max-width: 900px)': {
      // padding: '2px',
      // marginRight: '0px',
      // marginTop: '20px',
      height: '200px',
      width: '100px',
    },
  },
  hmi_img_div: {
    display: 'flex',
    justifyContent: 'center',
  },
  hmi_img: {
    height: '200px',
    width: '200px',
    '@media (max-width: 900px)': {
      height: '80px',
      width: '60px',
    },
  },
  hmi_food_title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.9rem',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  hmi_food_price: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.9rem',
    fontWeight: 'bold',
  },
  hmi_food_subtitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    marginTop: '2px',
  },
  hmi_food_colories: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    color: 'black',
    marginTop: '4px',
  },
  cart_button: {
    textTransform: 'lowercase',
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    borderRadius: '7px',
    height: '30px',
    backgroundColor:'#f93b1d',
    color:'white',
    '@media (max-width: 900px)': {
      marginTop: '2px',
      height: '20px',
    },
  },
  lower_div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30px',
    marginTop: '20px',
    '@media (max-width: 900px)': {
      marginTop: '10px',
      flexDirection:'column'
    },
  },
}));

export default function Homemenuitem({
  image_path,
  title,
  sub_title,
  colories,
  price,
}) {
  const {
    home_menu_item,
    hmi_img,
    hmi_img_div,
    hmi_food_title,
    hmi_food_subtitle,
    hmi_food_colories,
    cart_button,
    lower_div,
    hmi_food_price,
  } = useStyles();
  return (
    <div className={home_menu_item}>
      <div className={hmi_img_div}>
        <img className={hmi_img} src={image_path} />
      </div>
      <Typography  className={hmi_food_title} variant="h2" component="h1">
        {title}
      </Typography>
      <Typography className={hmi_food_subtitle} variant="h2" component="h1">
        {sub_title}
      </Typography>
      <Typography className={hmi_food_colories} variant="h2" component="h1">
        {colories}
      </Typography>
      <div className={lower_div}>
        <Typography className={hmi_food_price} variant="h2" component="h1">
          {price}
        </Typography>
        <Button
          disableElevation={true}
          
          className={cart_button}
        >
          New
        </Button>
      </div>
    </div>
  );
}

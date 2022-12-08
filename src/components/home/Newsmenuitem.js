import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  home_menu_item: {
    border: '1px solid #F2F2F2',
    width: '300px',
    marginLeft:'20px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    // padding: '7px',
    marginTop: '50px',
    // transition: 'all 0.6s ease-in-out',
    // '&:hover': {
    //   background: theme.palette.primary.main,
    //   '& button': {
    //     background: 'white',
    //   },
    // },
  },
  hmi_img_div: {
   
  },
  hmi_img: {
    borderRadius: '10px',
    height: '200px',
    width: '300px',
    overflow:'hidden'
    
  },
  hmi_food_title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '15px',
    color:'black',
    whiteSpace:'nowrap',
    width:'100px',
    textOverflow:'ellipsis',
    '&:hover': {
     textDecoration:'underline',
     color:'black'
    },
  },
  // hmi_food_price: {
  //   fontFamily: 'Inter, sans-serif',
  //   fontSize: '.9rem',
  //   fontWeight: 'bold',
  // },
  hmi_food_subtitle: {
    fontFamily: 'Inter, sans-serif',
    color:'grey',
    fontSize: '1.2rem',
    marginTop: '2px',
    fontWeight: 'bold',
    
  },
  hmi_food_colories: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'grey',
    marginTop: '2px',
  },
  // cart_button: {
  //   textTransform: 'lowercase',
  //   fontFamily: 'Inter, sans-serif',
  //   fontSize: '.7rem',
  //   fontWeight: 'bold',
  //   borderRadius: '7px',
  //   height: '30px',
  // },
  // lower_div: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: '35px',
  //   marginTop: '20px',
  // },
}));
const handleClick = ()=>{
  console.log('click!')
}

export default function Homemenuitem({
  image_path,
  title,
  sub_title,
  colories,
  id,
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
      {/* <div className={hmi_img_div}> */}
        <img className={hmi_img} src={image_path} />
      {/* </div> */}
      <Typography className={hmi_food_colories} variant="h2" >
        {colories}
      </Typography>
      {/* <Link component={RouterLink} to= '/'  underline='none'
        color='inherit'>
      {title}
    </Link> */}

      <Typography className={hmi_food_title} component={Link} to={`news/${id}`}>{title}</Typography>
  
      <Typography className={hmi_food_subtitle} variant="h2" component="h1">
        {sub_title}
      </Typography>
     
      <div className={lower_div}>
        
      </div>
    </div>
  );
}

import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
});
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
  const classes = useStyles();
  return (
    <div style={{
      border: '1px solid #F2F2F2',
    width: '300px',
    marginLeft:'20px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    // padding: '7px',
    marginTop: '50px',
    }}>
      {/* <div className={hmi_img_div}> */}
        <img style={{
          borderRadius: '10px',
          height: '200px',
          width: '300px',
          overflow:'hidden'
        }} src={image_path} />
      {/* </div> */}
      <Typography sx={{fontFamily: 'Inter, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'grey',
    marginTop: '2px',}} variant="h2" >
        {colories}
      </Typography>
      {/* <Link component={RouterLink} to= '/'  underline='none'
        color='inherit'>
      {title}
    </Link> */}

      <Typography sx={{
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
      }} component={Link} to={`news/${id}`}>{title}</Typography>
  
      <Typography sx={{
        fontFamily: 'Inter, sans-serif',
        color:'grey',
        fontSize: '1.2rem',
        marginTop: '2px',
        fontWeight: 'bold',
      }}variant="h2" component="h1">
        {sub_title}
      </Typography>
    </div>
  );
}

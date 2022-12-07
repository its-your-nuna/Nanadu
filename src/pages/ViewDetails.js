import React from "react"
import {useParams} from "react-router-dom"
import menudata from '../utils/newsdata2';
import { Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    // home_menu_item: {
    //   border: '1px solid #F2F2F2',
    //   height: '250px',
    //   width: '300px',
    //   borderRadius: '10px',
    //   position: 'relative',
    //   cursor: 'pointer',
    //   // padding: '7px',
    //   marginRight: '20px',
    //   marginTop: '20px',
    //   // transition: 'all 0.6s ease-in-out',
    //   // '&:hover': {
    //   //   background: theme.palette.primary.main,
    //   //   '& button': {
    //   //     background: 'white',
    //   //   },
    //   // },
    //   height: '400px',
    //   width: '600px',
    // },
    hmi_img_div: {
      width:'600px',
      border: '1px solid #F2F2F2',
      borderRadius: '10px',
      marginTop:'50px',
      // position: 'relative',
      // cursor: 'pointer',
      margin:'0 auto',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      // padding: '7px',
      // marginRight: '20px',
      // marginTop: '20px',
      '@media (max-width: 900px)': {
        width:'400px',
        
      },
      '@media (max-width: 500px)': {
        width:'350px',
        
      },
    },
    hmi_img: {
     
      borderRadius: '10px',
      height: '400px',
      width: '600px',
      overflow:'hidden',
      paddingTop:'20px',
      paddingBottom:'20px',
      '@media (max-width: 900px)': {
        width:'400px',
        height:'250px'
      },
      '@media (max-width: 500px)': {
        width:'350px',
        
      },
    },
    hmi_food_title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '15px',
    color:'black',
    // width:'300px',
    '&:hover': {
     textDecoration:'underline',
     color:'black'
    },
    '@media (max-width: 900px)': {
      fontSize: '1.7rem',
    },
    
    },
    hmi_food_price: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '.9rem',
      fontWeight: 'bold',
    },
    hmi_food_subtitle: {
      fontFamily: 'Inter, sans-serif',
      color:'grey',
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '2px',
    },
    hmi_food_colories: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'grey',
      marginTop: '4px',
    },
    cart_button: {
      textTransform: 'lowercase',
      fontFamily: 'Inter, sans-serif',
      fontSize: '.7rem',
      fontWeight: 'bold',
      borderRadius: '7px',
      height: '30px',
    },
    lower_div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35px',
      marginTop: '20px',
    },
  }));
  const handleClick = ()=>{
    console.log('click!')
  }
function ViewDetails() {
    
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
    const {id} = useParams()
    const thisNews = menudata.find(prod => prod.id === id)
    console.log(id)
    return (
        <div className={hmi_img_div}>
            <Typography className={hmi_food_colories} variant="h2" >
        {thisNews.data}
      </Typography>
      <Typography className={hmi_food_title} >{thisNews.title}</Typography>
         
            <img  className={hmi_img}  src={thisNews.image_path}/>
            <Typography className={hmi_food_subtitle} variant="h2" component="h1">
        {thisNews.sub_title}
      </Typography>
            {/* <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p> */}
        </div>
    )
}

export default ViewDetails
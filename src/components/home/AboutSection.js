import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,  Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  about_section: {
    display: 'flex',
    flexDirection:'row',
   
    // minHeight: '70vh',
    justifyContent:'center',
    marginTop:'50px'
    // height: 'max-content',
    // background: "url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-participation-portrait-design-template-a8ffff6f74ebe4d689560dbe066476d3_screen.jpg?ts=1636984015')",
    // backgroundRepeat: 'no-repeat',
    // objectFit: 'contain',
    // backgroundPosition: '0px',
    // backgroundSize: '300px',
   
    // '@media (max-width: 750px)': {
     
    //   backgroundPosition: '-10px',
    // },
  },
  about_image:{
    marginRight:'50px',
    height: '450px',
    width: '350px',
    '@media (max-width: 900px)': {
     width:'180px',
     height:'250px'
    },
  },

  about_title: {
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
  button: {
    borderRadius: '20px',
    width: '150px',
    marginTop: '30px',
    textTransform: 'lowercase',
  },
  leaderBoard_left_h1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '50px',
    color:'black',
    '@media (max-width: 900px)': {
      fontSize: '2rem',
    },
    
    
  },
  about_descriptions: {
    width:'40vw',
    fontFamily: 'Inter, sans-serif',
    color:'grey',
    fontSize: '1.5rem',
    marginTop: '25px',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '1.2rem',
    },
  },
}));

export default function AboutSection() {
  const {
    about_section,
    about_section_left,
    about_section_right,
    leaderBoard_left_h1,
    about_title,
    button,
    about_image,
    about_descriptions,
  } = useStyles();
  return (
    <div >
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
      }} component="h1">
          Сертификаты
        </Typography>
        <div className={about_section}>
      <img className={about_image}  src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-participation-portrait-design-template-a8ffff6f74ebe4d689560dbe066476d3_screen.jpg?ts=1636984015'/>
      <div className={about_section_left}></div>
      <div className={about_section_right}>
        
        <Typography sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '3rem',
          fontWeight: 'bold',
          marginTop: '50px',
          color:'black',
          '@media (max-width: 900px)': {
            fontSize: '2rem',
          },
        }}variant="h2" component="h1">
        Мы очень горды, 
        </Typography>
        <Typography sx={{
           width:'40vw',
           fontFamily: 'Inter, sans-serif',
           color:'grey',
           fontSize: '1.5rem',
           marginTop: '25px',
           fontWeight: 'bold',
           '@media (max-width: 900px)': {
             fontSize: '1.2rem',
           },
        }} component="p">
        что сеть «Korean Street Food»-это казахстанская сеть общественного питания! Наша сеть имеет запатентованный зарегистрированный товарный знак. 
        </Typography>
        {/* <Typography className={about_descriptions} component="p">
          If you want any food please login or sign up on our mobile app or
          website
        </Typography>
        <Button
          disableElevation
          className={button}
          variant="contained"
          color="primary"
          autoCapitalize="none"
          endIcon={<ArrowRightAltIcon />}
          component={Link}
          to={'/allmeals'}
        >
          our menu
        </Button> */}
        
      </div>
      </div>
    </div>
  );
}

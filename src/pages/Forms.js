import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Form from './Form';
const useStyles = makeStyles(() => ({
    
    about_section: {
        display: 'flex',
        flexDirection:'row',
        maxWidth:'1000px',
        justifyContent:'center',
        marginTop:'50px',
        margin:'0 auto',
        '@media (max-width: 500px)': {
          margin:'20px',
        },
      },
      about_image:{
        
        height: '350px',
        width: '450px',
        objectFit:'contain',
        '@media (max-width: 900px)': {
         width:'180px',
         height:'250px'
        },
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
        margin:'0 auto',
        fontFamily: 'Inter, sans-serif',
      
        fontSize: '2rem',
        marginTop: '25px',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
          fontSize: '1.5rem',
        },
        '@media (max-width: 500px)': {
          fontSize: '1.2rem',
        },
        
      },
      button: {
        borderRadius: '20px',
        width: '150px',
        marginTop: '30px',
        textTransform: 'lowercase',
      },

  leaderBoard: {
    textAlign:'center',
    display: 'flex',
    color:'white',
    background: "linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url('https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width:'100vw',
    height: '50vh',
    backgroundSize: 'cover',

    '@media (max-width: 900px)': {
      height: '30vh',
    },

    
  },
  leaderBoard_left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
  all:{
    display:'flex',
    flexDirection:'column'
  },
  leaderBoard_left_p: {
    
    fontFamily: 'Inter, sans-serif',
    marginTop: '50px',
    marginBottom: '50px',
    
    fontSize: '2.5rem',
    fontWeight: 'bold',
    width:'50vw',
    margin:'0 auto',
    '@media (max-width: 1500px)': {
      fontSize: '2rem',
      width:'70vw',
    },
    '@media (max-width: 900px)': {
      fontSize: '1.5rem',
      width:'70vw',
    },
    '@media (max-width: 500px)': {
      width:'100vw',
    },
  },
  images:{
    // objectFit:'contain',
    width:'60vw',
    height:'500px',
    marginTop:'50px',
    margin:'0 auto',
    '@media (max-width: 1500px)': {
      width:'80vw',
      height:'300px'
    },
    '@media (max-width: 900px)': {
      width:'80vw',
      height:'300px'
    },
    '@media (max-width: 500px)': {
      width:'80vw',
      height:'250px'
    }
  },
  hr:{
    border:'2px solid #ff3e19',
    width:'70vw',
    margin:'0 auto',
    '@media (max-width: 500px)': {
      width:'100vw',
    }
  }
 

}));

export default function LeaderBoard() {
  const {
    leaderBoard,
    leaderBoard_left,
    leaderBoard_left_p,
    hr,
  } = useStyles();
 

  return (
    <div>
      
      <AboutSection/>
    </div>
  );
}
function AboutSection() {
    const {
        about_section,
        leaderBoard_left_h1,
        
        images,
        about_image,
        about_descriptions,
        all
    } = useStyles();
    return (
        <div className={all}>
       
          <div className={about_section}>
        <img className={about_image}  src='form1.png'/>
        <div>  
        <Typography sx={{ fontFamily: 'Inter, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '50px',
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },}}>СОТРУДНИЧЕСТВО </Typography>        
        <Typography sx={{
          margin:'0 auto',
          fontFamily: 'Inter, sans-serif',
        
          fontSize: '2rem',
          marginTop: '25px',
          fontWeight: 'bold',
          '@media (max-width: 900px)': {
            fontSize: '1.5rem',
          },
          '@media (max-width: 500px)': {
            fontSize: '1.2rem',
          },
        }} style = {{marginLeft:'50px'}} component="p">
        Вам интересно сотрудничество с нами?
        <br/>
        Отправьте ваши предложения и мы обязательно рассмотрим ваши предложения!
          </Typography>  
        </div>
        </div>
        <div className={about_section}>
        <div >         
        <Typography sx={{ fontFamily: 'Inter, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '50px',
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },}}> ФРАНШИЗА </Typography>  
         <Typography sx= {{margin:'0 auto',
        fontFamily: 'Inter, sans-serif',
      
        fontSize: '2rem',
        marginTop: '25px',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
          fontSize: '1.5rem',
        },
        '@media (max-width: 500px)': {
          fontSize: '1.2rem',
        },}} style = {{marginRight:'50px'}} component="p">
         Наш девиз: ” Зарабатывать не на партнере, а зарабатывать вместе с ним!”
        <br/>
        Мы ищем единомышленников, с которыми вместе будем улучшать наш бизнес!
          </Typography>  
        </div>
        <img className={about_image}  src='form2.png'/>
         </div>
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
         Оставьте заявку
          </Typography>
          <Form/>
      </div>
    );
  }
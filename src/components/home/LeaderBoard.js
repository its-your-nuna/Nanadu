import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles(() => ({
  // header: {
  //   backgroundColor: '#400CCC',
  //   paddingRight: '79px',
  //   paddingLeft: '118px',
  //   '@media (max-width: 900px)': {
  //     paddingLeft: 0,
  //   },
  // },
  leaderBoard: {
    textAlign:'center',
    display: 'flex',
    // paddingRight: '79px',
    // paddingLeft: '118px',
    marginTop:'80px',
    color:'white',
    backgroundImage: "url('https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    backgroundRepeat: 'no-repeat',
  
    backgroundPosition: 'center',
    width:'100vw',
    height: '50vh',
    backgroundSize: 'cover',

    '@media (max-width: 900px)': {
      height: '30vh',
      // paddingLeft: '20px',
      // paddingRight: '0px',
      // backgroundPosition: 'center',
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
    fontSize: '5rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '4rem',
    },
    '@media (max-width: 500px)': {
      fontSize: '3rem',
    },
  },
  leaderBoard_left_p: {
    fontFamily: 'Inter, sans-serif',
    marginTop: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      fontSize: '1.2rem',
    },
  },
  // button: {
  //   borderRadius: '20px',
  //   width: '150px',
  //   marginTop: '30px',
  //   textTransform: 'lowercase',
  // },
  // quicktip: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   width: 'max-content',
  //   '@media (max-width: 400px)': {
  //     marginTop: '20px',
  //   },
  // },
  // quicktip_text: {
  //   fontSize: '0.9rem',
  //   lineHeight: '17px',
  //   fontFamily: 'Inter, sans-serif',
  //   marginLeft: '7px',
  // },
  // quickTip_container: {
  //   display: 'flex',
  //   gap: '20px',
  //   marginTop: '100px',
  //   flexWrap: 'wrap',
  //   '@media (max-width: 400px)': {
  //     gap: '0px',
  //   },
  // },
}));

export default function LeaderBoard() {
  const classes= useStyles();
 

  return (
    <div>
      <div className={classes.leaderBoard}>
        <div className={classes.leaderBoard_left}>
          <Typography
            sx = {{
              fontFamily: 'Inter, sans-serif',
              fontSize: '5rem',
              fontWeight: 'bold',
              '@media (max-width: 900px)': {
                fontSize: '4rem',
              },
              '@media (max-width: 500px)': {
                fontSize: '3rem',
              },
            }}
            variant="h2"
            component="h1"
          >
            Ждем вас, дорогие гости! <br /> 
          </Typography>
          <Typography sx={{
             fontFamily: 'Inter, sans-serif',
             marginTop: '20px',
             fontSize: '2rem',
             fontWeight: 'bold',
             '@media (max-width: 900px)': {
               fontSize: '1.2rem',
             },
          }} component="p">
            Сеть "Nandu" с радостью и большим удовольствием познакомит всех желающих с  <br /> 
            удивительной южно-корейской кухней
          </Typography>
        
        </div>
       
      </div>
    </div>
  );
}

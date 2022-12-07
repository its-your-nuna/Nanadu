import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles, Button } from '@material-ui/core';
//import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccessTimeFilledIcon from '@material-ui/icons/LocalMall';
import Food from '@material-ui/icons/LocalMall';

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
  const {
    leaderBoard,
    leaderBoard_left,
    leaderBoard_left_h1,
    leaderBoard_left_p,
    button,
    quicktip,
    quicktip_text,
    left,
    quickTip_container,
  } = useStyles();
  const QuickTip = ({ Icon, quicktip_details1, quicktip_details2 }) => (
    <div className={quicktip}>
      {Icon}
      <Typography className={quicktip_text} component="p">
        {quicktip_details1}
        <br /> {quicktip_details2}
      </Typography>
    </div>
  );

  return (
    <div>
      <div className={leaderBoard}>
        <div className={leaderBoard_left}>
          <Typography
            className={leaderBoard_left_h1}
            variant="h2"
            component="h1"
          >
            Ждем вас, дорогие гости! <br /> 
          </Typography>
          <Typography className={leaderBoard_left_p} component="p">
            Сеть "Nandu" с радостью и большим удовольствием познакомит всех желающих с  <br /> 
            удивительной южно-корейской кухней
          </Typography>
          {/* <Button
            disableElevation
            className={button}
            variant="contained"
            color="primary"
            autoCapitalize="none"
            endIcon={<ArrowRightAltIcon />}
            component={Link}
            to={'/allmeals'}
          >
            наше меню
          </Button> */}
          {/* <div className={quickTip_container}>
            <QuickTip
              Icon={<LocalMallIcon />}
              quicktip_details1="выбери свое любимое блюдо"
              quicktip_details2="и закажи!"
            />
            <QuickTip
              Icon={<AccessTimeFilledIcon />}
              quicktip_details1="приходи в любое время!"
              quicktip_details2="24/7"
            />
            <QuickTip
              Icon={<Food />}
              quicktip_details1="пробуй с удовольствием"
              quicktip_details2="у нас все халал"
            />
          </div> */}
        </div>
        <div className={left}></div>
      </div>
    </div>
  );
}

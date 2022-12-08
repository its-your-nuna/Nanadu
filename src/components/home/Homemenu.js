import React, { useRef } from 'react';

import { Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import Homemenuitem from './Homemenuitem';
import menudata from '../../utils/menudata';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@mui/styles';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const useStyles = makeStyles((theme) => ({
  testimonial_control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 70px',
    '@media (max-width: 1050px)': {
      display: 'none',
    },
  },
  testimonial_control_icon: {
    color: 'lightgray',
  },
  homemenu: {
    //padding: '50px 0px',
    paddingBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      padding: '50px 0px',
    },
  },
  leaderBoard_left_h1: {
    lineHeight: '40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '4rem',
    fontWeight: 'bold',
    marginTop: '17px',
    textAlign: 'center',
    marginBottom: '20px',
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
    marginBottom: '30px',
    flexWrap: 'wrap',
    paddingTop: '30px',
    '@media (max-width: 500px)': {
      paddingTop: '0px',
    },
  },
  button: {
    borderRadius: '20px',
    width: '150px',
    marginTop: '10px',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
  },
}));

export default function Homemenu() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const {
    testimonial_control,
    testimonial_control_icon,
    leaderBoard_left_h1,
    homemenu_menu,
    homemenu_explore,
    homemenu,
    button,
    homemenu_data,
  } = useStyles();
  const control = useRef(null);
  return (
    
    <div className={homemenu}>
      <div className={homemenu_explore}>
      
        <Typography className={leaderBoard_left_h1} variant="h2" component="h1">
          Наши лучшие блюда
        </Typography>
      </div>

      {/* <div className={homemenu_data}>
        {menudata.map((data, index) => (
          <Homemenuitem key={index} {...data} />
        ))}
      </div> */}
       <div style={{ display: 'flex' }}>
        <div className={testimonial_control}>
          <ArrowBackIosIcon
            onClick={() => control.current.prev()}
            className={testimonial_control_icon}
          />
        </div>
      <OwlCarousel
          autoplayHoverPause={false}
          animateOut="fadeOut"
          loop={true}
          smartSpeed={1000}
          autoPlay={true}
          ref={control}
          dots={true}
          nav={false}
          items={1}
          // className={`owl-theme ${newClass}`}
          responsive={{
            0: {
              items: 1,
            },
            1000: {
              items: 1,
            },
            1276: {
              items: 1,
            },
          }}
          margin={10}
          center={true}
        >
          {menudata.map((data, index) => (
            <div key={index} className="item">
              <Homemenuitem key={index} {...data} />
            </div>
          ))}
        </OwlCarousel>
        <div className={testimonial_control}>
          <ArrowForwardIosIcon
            onClick={() => control.current.next()}
            className={testimonial_control_icon}
          />
        </div>
      </div>
      <Button
        disableElevation
        className={button}
        variant="contained"
        autoCapitalize="none"
        endIcon={<ArrowRightAltIcon />}
        component={Link}
        to={'/allmeals'}
      >
        see all food
      </Button>
    </div>
  );
}

import React, { useRef } from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import menudata from '../../utils/menudata';
import Homemenuitem from './Homemenuitem'
import '../../App.css'
const useStyles = makeStyles((theme) => ({
  testimonial_section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // paddingBottom: '50px',
  },
  testimonial_control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px',
   
  },
  testimonial_control_icon: {
    color: 'black',
   
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
  // testimonial_heading: {
  //   fontFamily: 'Inter, sans-serif',
  //   fontWeight: 'bold',
  //   fontSize: '1rem',
  // },
  // homemenu_explore: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
   
  // },
  newClass: {
    margin:'20px',
    width: '900px',
    '@media (max-width: 900px)': {
      maxWidth: '350px',
      margin:'10px',
    },
  },
  // homemenu_data: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   marginBottom: '30px',
  //   flexWrap: 'wrap',
  //   // paddingTop: '30px',
  //   '@media (max-width: 500px)': {
  //     paddingTop: '0px',
  //   },
  // },
}));

export default function Testimonialsection() {
  const {
    testimonial_section,
    testimonial_control,
    testimonial_control_icon,
    leaderBoard_left_h1,
    testimonial_heading,
    homemenu_explore,
    homemenu_data,
    newClass,
  } = useStyles();
  const control = useRef(null);
  return (
    <div className={testimonial_section}>
      <div className={homemenu_explore}>
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
          Наши лучшие блюда
        </Typography>
      </div>
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
          items={3}
          className={`owl-theme ${newClass}`}
          responsive={{
            0: {
              items: 3,
            },
            1000: {
              items: 3,
            },
            1276: {
              items: 3
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
    </div>
  );
}

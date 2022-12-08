import React from 'react';
import {Button, Paper } from '@mui/material';
import { IconBowl, IconCup, IconPaperBag, IconSalad, IconSoup } from '@tabler/icons';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '20px',
    fontWeight: 'bold',
    width: '170px',
    marginTop: '25px',
    marginLeft: '25px',
    fontSize: '1.2rem',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
    '&:hover': {
      background: 'white',
      color:'#202794'
    },
    '@media (max-width: 500px)': {
      width: '100px',
      marginLeft: '10px',
    },
  },
  homemenu_data:{
    display:'flex',
    justifyContent:'center'
  },
}))
const Categories = ({categories,filterItems}) => {
  const {
    button,
    homemenu_data,
  } = useStyles();
  var icon = [];
  if(categories[0]=='первые блюда'){
    icon[0] = <IconBowl/>
  }
  if(categories[1]=='вторые блюда'){
    icon[1] = <IconSoup/>
  }
  if(categories[2]=='салаты'){
    icon[3] = <IconSalad/>
  }
  if(categories[2]=='напитки и десерты'){
    icon[2] = <IconCup/>
  }
  console.log(categories,icon)
  return <div className={homemenu_data}>
    {categories.map((category,index) => {
      return <Button 
        type='button' 
        disableElevation
        sx={{
          borderRadius: '20px',
          fontWeight: 'bold',
          width: '170px',
          marginTop: '25px',
          marginLeft: '25px',
          fontSize: '1.2rem',
          textTransform: 'lowercase',
          background: 'white',
          border: '1px solid grey',
          '&:hover': {
            background: 'white',
            color:'#202794'
          },
          '@media (max-width: 500px)': {
            width: '100px',
            marginLeft: '10px',
          },
        }}
        startIcon={icon[index]}
        key={index}
        onClick={() => filterItems(category)}
        >
        {category}
      </Button>
      
    })}
  </div>;
};

export default Categories;
{/* <Button
disableElevation
className={button}

endIcon={<ArrowRightAltIcon />}
component={Link}
to={'/news'}
>
Посмотреть все
</Button> */}
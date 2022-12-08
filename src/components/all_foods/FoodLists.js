import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { makeStyles } from '@mui/styles';

const allCategories = [...new Set(items.map(item => item.category))];
const useStyles = makeStyles((theme) => ({
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
}))

function FoodLists() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [clicked, setClicked] = useState(true);
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
  console.log(menuItems)
  const filterItems = (category) => {
    // if (category === 'all') {
    //   setMenuItems(items)
    //   return
    // }
    setClicked(false)
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2 className={leaderBoard_left_h1}>Наше меню</h2>
        {/* <div className='underline'></div> */}
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu clicked = {clicked} items={menuItems} />
    </section>
  </main>;
}

export default FoodLists;

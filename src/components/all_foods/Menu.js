import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const useStyles = makeStyles({
  root: {
    width: 345,
    margin:'50px'
  },
  roots: {
    maxWidth:1170,
    display:'flex',
    justifyContent:'center',
    margin:'0 auto',
    flexWrap:'wrap'
  },
  media: {
    height: "100px",
    backgroundSize:'150px'
  }
});

const Menu = ({items,clicked}) => {
  const classes = useStyles();
  return (
    <div className={classes.roots}>
      {clicked?items.map((menuItem) => {
        const {id,title,img,price,desc,category} = menuItem;
       if(category == 'первые блюда'){
        return <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      </Card>
        
}}):items.map((menuItem) => {
  const {id,title,img,price,desc,category} = menuItem;
 
  return <Card className={classes.root}>
  <CardMedia
    className={classes.media}
    image={img}
    title="Paella dish"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {desc}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {price}
    </Typography>
  </CardContent>
</Card>
  
})}
    </div>
  );
};

export default Menu;

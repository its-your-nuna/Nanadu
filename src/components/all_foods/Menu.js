import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


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

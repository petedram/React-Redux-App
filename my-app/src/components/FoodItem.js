import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


const FoodItem = props => {
    
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

      const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528"
              title="NAME"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                NAME
              </Typography>
              <Rating name="read-only" value={2} readOnly />
              <Typography variant="subtitle1" color="textSecondary">
                Steak
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                12 pike st, london
              </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
  };

  const mapStateToProps = state => {
    return {
    //   additionalPrice: state.additionalPrice,
    //   car: state.car,
    //   additionalFeatures: state.additionalFeatures
    }
  }
  
  export default connect(
    mapStateToProps,
    {})(FoodItem);




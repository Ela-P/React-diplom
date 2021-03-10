import React from 'react';
import PropTypes from "prop-types";
import { 
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    withStyles,
} from '@material-ui/core';

import styles from './styles'





const RepositoryCard = () => {
    return (
<Card >
      <CardActionArea>
        <CardMedia
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button >
          Share
        </Button>
        <Button >
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
};

export default RepositoryCard;
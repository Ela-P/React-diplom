import React from 'react';
// import propTypes from 'prop-types';

import { 
  withStyles,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core';

import styles from "./styles";


const RepositoryCard = ({name, avatar, classes}) => {
    return (
    <Card >
      <CardActionArea>
        <CardContent>

        <Box className={classes.wrapperName}> 
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </Box>

          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button >
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
};

// RepositoryCard.propTypes = 

// ;

export default withStyles(styles)(RepositoryCard);
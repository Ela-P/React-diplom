import React from 'react';
import PropTypes from 'prop-types';

import { 
    withStyles,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Button,
    CardMedia,
    Typography,
} from '@material-ui/core';
import {startCase} from 'lodash';

import styles from "./styles";


  const RepositoryCard = ({classes, image, repoName, description, handleClick }) => {
      return (
      <Card className={classes.wrapper} >
        <CardActionArea>
          <CardMedia className={classes.area}
            image={image}
            onClick={handleClick}
          />
          
          <CardContent>
          <Box className={classes.wrapperName}> 
            <Typography gutterBottom variant="h5" component="h2">
              {startCase(repoName)}
            </Typography>
          </Box>

            <Typography variant="body2" color="textSecondary" component="p"> 
            {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleClick} >
            Learn More
          </Button>
        </CardActions>
      </Card>
      );
  };

RepositoryCard.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  repoName: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,

};

export default withStyles(styles)(RepositoryCard);
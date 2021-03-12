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

import styles from "./styles";


  const RepositoryCard = ({classes, image, repositories, description}) => {
      return (
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia className={classes.root}
            image={image}
          />
          
          <CardContent>
          <Box className={classes.wrapperName}> 
            <Typography gutterBottom variant="h5" component="h2">
              {repositories}
            </Typography>
          </Box>

            <Typography variant="body2" color="textSecondary" component="p"> 
            {description}
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

RepositoryCard.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(RepositoryCard);
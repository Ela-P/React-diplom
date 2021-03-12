import React from 'react';
import PropTypes from 'prop-types';
import {Box, withStyles} from "@material-ui/core";

import RepositoryCard from '../../../RepositoryCard';
import styles from './styles';


const GithubReposPageLayout = ({classes, names, isLoading, errors}) => {
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.repoArr}> 
                {names.map((repo) => (
                <RepositoryCard repoName={repo.names}
                description={repo.description}
                image={repo.owner.avatar_url} 
                />
                ))}
            </Box>
          
        </Box>
    );
};

GithubReposPageLayout.propTypes = {
    names: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.string.isRequired,
};

export default withStyles(styles)(GithubReposPageLayout);
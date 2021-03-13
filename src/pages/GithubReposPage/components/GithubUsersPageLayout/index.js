import React from 'react';
import PropTypes from 'prop-types';
import { Box, withStyles } from "@material-ui/core";

import RepositoryCard from '../../../RepositoryCard';
import styles from './styles';


const GithubReposPageLayout = ({classes, repositories, handleGoUserDetails, isLoading, errors}) => {
        return (
            <Box className={classes.wrapper}>
                <Box className={classes.reposArea} > 
                    {repositories.map((repo) => (
                    <Box className={classes.cardI} key={repo.id}> 
                        <RepositoryCard repoName={repo.name}
                        description={repo.description}
                        image={repo.owner.avatar_url}
                        handleClick={() => handleGoUserDetails(repo.id)}
                    />
                    </Box>
                    ))}
                </Box>
            </Box>
        );
    };

GithubReposPageLayout.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.string.isRequired,
    handleGoUserDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(GithubReposPageLayout);
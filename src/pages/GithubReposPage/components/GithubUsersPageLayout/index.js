import React from 'react';
import PropTypes from 'prop-types';
import {Box, withStyles} from "@material-ui/core";

import RepositoryCard from '../../../RepositoryCard';
// import styles from './styles';


const GithubReposPageLayout = ({classes, repositories, isLoading, errors}) => {
    return (
        <Box >
            <Box > 
                {repositories.map((repo) => (
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
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.string.isRequired,
};

export default GithubReposPageLayout;
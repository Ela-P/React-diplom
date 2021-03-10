import React from 'react';
import PropTypes from 'prop-types'; 
import {Box} from "@material-ui/core";

import RepositoryCard from '../RepositoryCard';


const GithubReposPageLayout = ({}) => {
    return (
        <Box>
        <RepositoryCard/>
        </Box>
    );
};

// GithubReposPageLayout.PropTypes = {
 
// }; 

export default GithubReposPageLayout;
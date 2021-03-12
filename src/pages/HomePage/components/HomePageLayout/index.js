import React from "react";
import {Link} from 'react-router-dom';
import {ROUTES} from "../../../../routs/routeNames";

const HomePageLayout = ({handleGoToGithub}) => {
    return (
        <div>
        <Link to={ROUTES. GITHUB_PAGE}>
        <button onClick={handleGoToGithub}> Github data page </button>
        </Link>
        </div>
    );
};

export default HomePageLayout;


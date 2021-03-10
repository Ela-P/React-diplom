import HomePageLayout from "../components/HomePageLayout";

import { ROUTES } from '../../../routs/routeNames';  

const HomePageContainer = ({ history }) => {
    const handleGoToGithub = () => {
        history.push(ROUTES.GITHUB_PAGE);
    }
    return (
        <HomePageLayout handleGoToGithub={handleGoToGithub}/>
    );
};

export default HomePageContainer;
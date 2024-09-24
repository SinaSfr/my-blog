import { useRoutes } from "react-router-dom";
import MyResume from "./MyResume/MyResume";
import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./MyServices/MyServices";
import WorkExamplePage from "./WorkExamplePage/WorkExamplePage";

const AppRouter = () => {
    const routes = [
        { path: '/', element: <AboutMe/>},
        { path: '/my-resume', element: <MyResume /> },
        { path: '/services', element: <MyServices/> },
        { path: '/example-works', element: <WorkExamplePage/> },
        { path: '/weblog', element: <h2>weblog</h2> },
        { path: '/contact-me', element: <h2>contact-me</h2> }
    ];

    return useRoutes(routes);
}

export default AppRouter
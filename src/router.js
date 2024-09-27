import { useRoutes } from "react-router-dom";
import MyResume from "./MyResume/MyResume";
import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./MyServices/MyServices";
import WorkExamplePage from "./WorkExamplePage/WorkExamplePage";
import MyWeblog from "./MyWeblog/MyWeblog";
import ContactMe from "./ContactMe/ContactMe";

const AppRouter = () => {
    const routes = [
        { path: '/', element: <AboutMe/>},
        { path: '/my-resume', element: <MyResume /> },
        { path: '/services', element: <MyServices/> },
        { path: '/example-works', element: <WorkExamplePage/> },
        { path: '/weblog', element: <MyWeblog/> },
        { path: '/contact-me', element: <ContactMe/> }
    ];

    return useRoutes(routes);
}

export default AppRouter
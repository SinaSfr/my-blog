import { useRoutes } from "react-router-dom";
import MyResume from "./MyResume/MyResume";
import AboutMe from "./AboutMe/AboutMe";

const AppRouter = () => {
    const routes = [
        { path: '/', element: <AboutMe/>},
        { path: '/my-resume', element: <MyResume /> },
        { path: '/services', element: <h2>services</h2> },
        { path: '/example-works', element: <h2>example-works</h2> },
        { path: '/weblog', element: <h2>weblog</h2> },
        { path: '/contact-me', element: <h2>contact-me</h2> }
    ];

    return useRoutes(routes);
}

export default AppRouter
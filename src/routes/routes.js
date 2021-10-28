import LayoutHome from "../layouts/LayoutHome";
import LayoutTest from "../layouts/LayoutTest";
import LayoutAbout from "../layouts/LayoutAbout";
import Home from "../views/Home";
import Test from "../views/Test";
import About from "../views/About";
import NotFound from "../views/NotFound";

const routes = [
    {
        path: "/prueba",
        component: LayoutTest,
        exact: false,
        routes: [
            {
                path: "/prueba",
                component: Test,
                exact: true
            },
            {
                component: NotFound
            }
        ]
    },
    {
        path: "/nosotros",
        component: LayoutAbout,
        exact: false,
        routes: [
            {
                path: "/nosotros",
                component: About,
                exact: true
            },
            {
                component: NotFound
            }
        ]
    },
    {
        path: "/",
        component: LayoutHome,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                component: NotFound
            }
        ]
    }
];

export default routes;
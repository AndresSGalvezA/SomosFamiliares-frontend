import LayoutHome from "../layouts/LayoutHome";
import LayoutTest from "../layouts/LayoutTest";
import Home from "../views/Home";
import Test from "../views/Test";
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
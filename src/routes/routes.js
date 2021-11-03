import Layout from "../layouts/Layout";
import Home from "../views/Home";
import Test from "../views/Test";
import Result from "../views/Result";
import NotFound from "../views/NotFound";

const routes = [
    {
        path: "/prueba",
        component: Layout,
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
        path: "/resultado",
        component: Layout,
        exact: false,
        routes: [
            {
                path: "/resultado",
                component: Result,
                exact: true
            },
            {
                component: NotFound
            }
        ]
    },
    {
        path: "/",
        component: Layout,
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
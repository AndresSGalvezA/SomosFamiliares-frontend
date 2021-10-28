import React from "react";
import { Route, Switch } from 'react-router-dom';
//import { Layout } from "antd";
//import './LayoutBasic.scss';

export default function LayoutHome(props) {
    const { routes } = props;
    //const { Content, Footer } = Layout;
    return (
        <>
            <LoadRoutes routes={routes} />
        </>
    );
}

function LoadRoutes({routes}) {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                ))
            }
        </Switch>
    );
}
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Login from './pages/login';
import Main from './pages/main';

interface IRoutePrivate {
    path?: string;
    component: React.FunctionComponent | any;
    exact?: boolean;
    user?: any;
}

const PrivateRoute: React.FC<IRoutePrivate> = ({
    component: Component,
    ...rest
}) => {
    const auth = (user: IRoutePrivate) => user.user;
    const authenticated = useSelector(auth);
    return (
        <Route
            {...rest}
            render={(props: any) =>
                authenticated.user.authenticate ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

const Routes: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

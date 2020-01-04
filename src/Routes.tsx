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
    component: React.FunctionComponent;
    exact?: boolean;
}

const PrivateRoute: React.FC<IRoutePrivate> = ({
    component: Component,
    ...rest
}) => {
    const auth = (user: IRootState) => user.user;
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

interface IRootState {
    user?: any;
}

const Routes: React.FC<IRootState> = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/main" exact component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

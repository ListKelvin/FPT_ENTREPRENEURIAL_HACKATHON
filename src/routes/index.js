import { useState } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/Layout/LayoutComponent';
import App from './Home/App';
import SignInComponent from './LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// children: [
//     {
//         index: true,
//         element: <Home />,
//     },
// ],
const publicRoute = [
    {
        path: 'home',
        component: <App />,
        exact: true,
        restrict: true,
    },
    {
        path: 'login',
        component: <SignInComponent />,
        exact: true,
        restrict: true,
    },
];

const privateRoute = [
    {
        path: 'private',
        component: <App />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    const [setter, setSetter] = useState();

    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route exact path="/" element={<PrivateRoute />}>
                        {privateRoute.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                    <Route exact path="/" element={<PublicRoute />}>
                        {publicRoute.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<p>404</p>} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default RouterComponent;

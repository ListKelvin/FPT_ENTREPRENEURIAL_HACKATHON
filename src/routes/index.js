import { useState } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { WavyContainer, WavyLink } from 'react-wavy-transitions';

import Layout from '../components/Layout/LayoutComponent';
import Toast from '../components/ToastNotification/index';
import Cart from './Cart/index';
import ChatBox from './Chat';
import App from './Home/App';
import SignInComponent from './LoginPage';
import PostProductPage from './PostProduct';
import PrivateRoute from './PrivateRoute';
import Product from './ProductPage/index';
import PublicRoute from './PublicRoute';
import SignUpPage from './SignUpPage';
import UpdateInfoPage from './UpdateInfo';
import VerifyEmail from './VerifyEmail';
import OrderPage from './orderPage';

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
    {
        path: 'chat',
        component: <ChatBox />,
        exact: true,
        restrict: true,
    },
    {
        path: 'order',
        component: <OrderPage />,
        exact: true,
        restrict: true,
    },
    {
        path: 'post',
        component: <PostProductPage />,
        exact: true,
        restrict: true,
    },
    {
        path: 'detail/:id',
        component: <Product />,
        exact: true,
        restrict: true,
    },

    {
        path: 'cart',
        component: <Cart />,
        exact: true,
        restrict: true,
    },
    {
        path: 'register',
        component: <SignUpPage />,
        exact: true,
        restrict: true,
    },
    {
        path: 'register',
        component: <SignUpPage />,
        exact: true,
        restrict: true,
    },
    {
        path: 'verify',
        component: <VerifyEmail />,
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
    return (
        <BrowserRouter>
            <Layout>
                <WavyContainer />
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
            </Layout>
            <Toast />
        </BrowserRouter>
    );
};

export default RouterComponent;

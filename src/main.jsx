import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import UserContext from './components/auth/UserContext.jsx';
import Premium from './components/Premium.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Balance from './components/Balance.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/premium',
                element: (
                    <PrivateRoutes>
                        <Premium />
                    </PrivateRoutes>
                ),
            },
            {
                path: '/balance',
                element: (
                    <PrivateRoutes>
                        <Balance />
                    </PrivateRoutes>
                ),
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContext>
            <RouterProvider router={router} />
        </UserContext>
    </React.StrictMode>
);

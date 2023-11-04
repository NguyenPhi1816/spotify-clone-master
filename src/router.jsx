import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
// import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

export default router;

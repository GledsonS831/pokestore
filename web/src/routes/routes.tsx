import React from 'react';

import {Route, BrowserRouter} from 'react-router-dom';

import HomeRoute from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <HomeRoute />
        </BrowserRouter>
    )
}

export default Routes;
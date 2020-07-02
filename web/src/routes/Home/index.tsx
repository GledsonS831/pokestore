import React from 'react'
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';

const HomeRoute = () => {
    return (
        <Route component={Home} path='/' exact />
    )
}

export default HomeRoute
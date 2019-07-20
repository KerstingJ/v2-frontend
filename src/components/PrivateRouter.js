import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {AUTH_TOKEN} from '../config'

export default props => {
    const {component: Component, ...rest} = props;

    return (
        <Route {...rest} render={props => {
            return window.localStorage.getItem(AUTH_TOKEN) ? <Component {...props} /> : <Redirect to="/login" />
        }} />
    )
}
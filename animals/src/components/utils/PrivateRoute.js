//1. It has the SAME API as Route
//Your component accept a component prop, just like a Route does, and it can also take on ay other prop that gets passed into it 
//2. It renders a Route and passes all the props through it

//It checks if the user is authenticated, if they are, it renders the Component prop
//if not, it redirects to the login 

import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render = {props => localStorage.getItem('token') ? (
            <Component {...props}/>) : 
           (<Redirect to = '/login'/>)
        
        }
        />
    )
}

export default PrivateRoute;
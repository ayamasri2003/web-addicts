// In this page, guards routes that require authentication 
/*
ProtectedRoute flow:
the PrivateRoutes component checks if the user is authenticated. 
If yes, the Dashboard component is displayed.
Packages used:
react-router-dom: A library for routing in React applications. It allows you to define routes in your app and 
handle navigation between different components or views. 
react-redux: library for managing global state in React applications using the Redux pattern. 
*/

import React from "react";
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
/*
Outlet: acts as a placeholder for child route (<Dashboard />), meaning it renders the components
of the nested routes defined within the parent route (<PrivateRoutes />}).
Navigate: component used to programmatically redirect users to a different route. 
useSelector: hook from React-Redux that allows you to 
access the state managed by Redux in your functional components.
*/

export default function PrivateRoutes() {
    const { currentUser } = useSelector((state: any) => state.auth);
    /*
    currentUser is being accessed from the Redux state, specifically from the auth slice of the state. 
    This means that the currentUser is stored in the Redux store and can be accessed in your component 
    using the useSelector hook. This allows your component to  automatically update or re-render whenever 
    the authentication status changes. 
    */
    return currentUser ? <Outlet /> : <Navigate to="/" /> 
    /* Checks if the user is authenticated (currentUser exists);  if so, they are directed to the 
    requested page (via <Outlet />), otherwise they are redirected to the sign-in page. */
        }
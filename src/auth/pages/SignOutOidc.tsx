import React from 'react';
import {signoutRedirectCallback} from "../userService";
import AuthProgress from "./AuthProgress";


function SignOutOidc()
{
    return <AuthProgress callback={signoutRedirectCallback}/>;
}

export default SignOutOidc

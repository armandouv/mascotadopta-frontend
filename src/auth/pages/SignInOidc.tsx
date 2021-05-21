import React from 'react';
import {signinRedirectCallback} from "../userService";
import AuthProgress from "./AuthProgress";

function SignInOidc()
{
    return <AuthProgress callback={signinRedirectCallback}/>;
}

export default SignInOidc;

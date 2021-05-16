import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {signinRedirectCallback} from "../userService";

function SignInOidc()
{
    const history = useHistory()
    useEffect(() => {
        signinRedirectCallback()
            .then(() => history.push('/'));
    }, [history])

    return (
        <div>
            Redirigiendo...
        </div>
    )
}

export default SignInOidc;

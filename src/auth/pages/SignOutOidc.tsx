import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {signoutRedirectCallback} from "../userService";

// TODO: Implement different functionality or merge into single component with signin.
function SignOutOidc()
{
    const history = useHistory();
    useEffect(() => {
        signoutRedirectCallback()
            .then(() => history.push('/'));
    }, [history]);

    return (
        <div>
            Redirigiendo...
        </div>
    )
}

export default SignOutOidc

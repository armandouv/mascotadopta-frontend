import { UserManager } from 'oidc-client';

const config = {
    authority: "http://localhost:8180/auth/realms/Mascotadopta/",
    client_id: "mascotadopta-test",
    redirect_uri: "http://localhost:3000/",
    response_type: "code",
    scope: "email roles",
    post_logout_redirect_uri: "http://localhost:3000/",
};

const userManager = new UserManager(config);
/*
export async function loadUserFromStorage(store) {
    try {
        let user = await userManager.getUser()
        if (!user) { return store.dispatch(storeUserError()) }
        store.dispatch(storeUser(user))
    } catch (e) {
        console.error(`User not found: ${e}`)
        store.dispatch(storeUserError())
    }
}*/

export function signinRedirect() {
    return userManager.signinRedirect();
}

export function signinRedirectCallback() {
    return userManager.signinRedirectCallback();
}

export async function signoutRedirect() {
    await userManager.clearStaleState();
    await userManager.removeUser();
    return userManager.signoutRedirect();
}

export async function signoutRedirectCallback() {
    await userManager.clearStaleState()
    await userManager.removeUser()
    return userManager.signoutRedirectCallback()
}

export default userManager;

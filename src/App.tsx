import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import Header from "./header/Header";
import Main from "./main/Main";
import SignOutOidc from "./auth/pages/SignOutOidc";
import SignInOidc from "./auth/pages/SignInOidc";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Footer from "./footer/Footer";

export const App = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/signout-oidc" component={SignOutOidc} />
                <Route path="/signin-oidc" component={SignInOidc} />
                <Route exact path="/" component={Main} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </ChakraProvider>
)

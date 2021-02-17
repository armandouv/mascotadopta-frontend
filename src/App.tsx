import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import Header from "./header/Header";
import Main from "./main/Main";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Header/>
        <Main/>
    </ChakraProvider>
)

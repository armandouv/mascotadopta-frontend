import React from "react";
import {Icon} from "@chakra-ui/react";

function MascotHomeIcon(props: any)
{
    return (
        <Icon viewBox="0 0 512 512" {...props}>
            <path
                d="M256 135.973L86.929 271.804v220.2h93.072v-118.95c0-41.906 34.092-75.999 75.999-75.999 41.905 0 75.999 34.092 75.999 75.999v118.95h93.072v-220.2L256 135.973z"/>
            <path
                d="M256 327.055c-25.364 0-45.999 20.636-45.999 45.999v118.95h91.998v-118.95c0-25.364-20.635-45.999-45.999-45.999zM256 19.997L0 225.665l37.836 47.097L256 97.492l218.163 175.27L512 225.666z"/>
        </Icon>
    );
}

export default MascotHomeIcon;

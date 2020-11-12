import React, { useState } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import UserProfile from "./UserProfile";

const UserHome = (props) => {
    
    const [userNav, setUserNav] = useState({
        page: "Profile"
    })

    switch(userNav.page) {
        case "Towns":
            return (
                <div>
                    Towns Page
                </div>
            )
        case "News":
            return (
                <div>
                    News Page
                </div>
            )
        default: 
            return (
                <UserProfile name={props.name} />
            )
    }
}

export default UserHome;
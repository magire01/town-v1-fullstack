import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import UserProfile from "./UserProfile";
import Home from "./Home";

const UserHome = (props) => {
    
    const [userNav, setUserNav] = useState({
        page: props.page
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
        case "Logout":
            return (
                <Home />
            )
        default: 
            return (
                <UserProfile name={props.name} />
            )
    }
}

export default UserHome;
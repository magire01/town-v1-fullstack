import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import Home from "../pages/Home";
import UserHome from "../pages/UserHome";
import UserProfile from "../pages/UserProfile";

const HeaderAuth = (props) => {

    const [pageNav, setPageNav] = useState({
        page: "Profile"
    })

    
    switch (pageNav.page) {
        case "Towns":
            return (
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Town
                            </Typography>
                            <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                            <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                            <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                            <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                        </Toolbar>
                    </AppBar>
                    Towns
                </div>
            )
        case "News":
            return (
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Town
                            </Typography>
                            <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                            <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                            <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                            <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                        </Toolbar>
                    </AppBar>
                    News    
                </div>
            )
        case "Logout":
            return (
                <Home />
            )
        default:

            return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Town
                        </Typography>
                        <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                        <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                        <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                        <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                <UserProfile name={props.name}/>
            </div>
            )
    }
}

export default HeaderAuth;
import React, { useState, useEffect } from "react";

import { AppBar, Grid, Toolbar, Typography, Button } from "@material-ui/core";

import Home from "../pages/Home";
import UserHome from "../pages/UserHome";
import UserProfile from "../pages/UserProfile";

const HeaderAuth = (props) => {

    const [pageNav, setPageNav] = useState({
        page: "Profile"
    })

    const barStyle = {
        main: {
            backgroundColor: "#542f00"
        },
        button: {
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: 30
        }
    }
    
    switch (pageNav.page) {
        case "Towns":
            return (
                <div>
                <AppBar position="static" style={barStyle.main}>
                    <Toolbar>
                        <Grid container>
                            <Grid item>
                                <Typography variant="h4">
                                    Town
                                </Typography>
                            </Grid>
                            <Grid item style={barStyle.button}>
                                <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                                <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                                <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                                <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                Towns
            </div>
            )
        case "News":
            return (
                <div>
                <AppBar position="static" style={barStyle.main}>
                    <Toolbar>
                        <Grid container>
                            <Grid item>
                                <Typography variant="h4">
                                    Town
                                </Typography>
                            </Grid>
                            <Grid item style={barStyle.button}>
                                <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                                <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                                <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                                <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                            </Grid>
                        </Grid>
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
                <AppBar position="static" style={barStyle.main}>
                    <Toolbar>
                        <Grid container>
                            <Grid item>
                                <Typography variant="h4">
                                    Town
                                </Typography>
                            </Grid>
                            <Grid item style={barStyle.button}>
                                <Button onClick={() => setPageNav({ page: "Profile" })} color="inherit">Profile</Button>
                                <Button onClick={() => setPageNav({ page: "Towns" })} color="inherit">Towns</Button>
                                <Button onClick={() => setPageNav({ page: "News" })} color="inherit">News</Button>
                                <Button onClick={() => setPageNav({ page: "Logout" })} color="inherit">Logout</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <UserProfile name={props.name}/>
            </div>
            )
    }
}

export default HeaderAuth;
import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import Home from "../pages/Home"

const Header = () => {

    const [pageNav, setPageNav] = useState({
        page: "Login"
    })

    switch (pageNav.page) {
        case "Sign Up":
            return (
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Town
                            </Typography>
                            <Button onClick={setPageNav({ page: "SignUp"})} color="inherit">Sign Up</Button>
                            <Button onClick={setPageNav({ page: "Login" })} color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        default:
            return (
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Town
                            </Typography>
                            <Button onClick={setPageNav({ page: "SignUp"})} color="inherit">Sign Up</Button>
                            <Button onClick={setPageNav({ page: "Login" })} color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            )
    }
}

export default Header;
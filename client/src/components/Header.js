import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = (props) => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Town
                    </Typography>
                    <Button color="inherit">Sign Up</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
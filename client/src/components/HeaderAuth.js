import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Town
                    </Typography>
                    <Button color="inherit">Profile</Button>
                    <Button color="inherit">Towns</Button>
                    <Button color="inherit">News</Button>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
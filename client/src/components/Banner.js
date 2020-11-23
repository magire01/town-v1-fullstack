import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button, Paper } from "@material-ui/core";

import Home from "../pages/Home"

const Banner = () => {


    const bannerStyle = {
        background: {
            backgroundColor: "#9c2d17",
            width: 800,
            height: 125,
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 30,
            paddingTop: 40
        },
        title: {
            color: "white",
            textAlign: "center"
        },
        subtitle: {
            color: "white",
            textAlign: "center"
        }
    }

    return (
        <div>
            <Paper style={bannerStyle.background}>
                <Typography variant="h2" style={bannerStyle.title}>
                    Town
                </Typography>

                <Typography variant="subtitle1" style={bannerStyle.subtitle}>
                    Test Social Media Site
                </Typography>
            </Paper>
        </div>
    )
    
}

export default Banner;
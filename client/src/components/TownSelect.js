import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button, Card } from "@material-ui/core";

import API from "../utils/API";

import ProfileHome from "../components/ProfileHome";
import CreateProfile from "../components/CreateProfile";

const TownSelect = (props) => {

    useEffect(() => {
        API.getTowns()
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }, [])


    
    return (
        <div>
            <Grid container>
                All Towns
            </Grid>
        </div>
    )
}

export default TownSelect;
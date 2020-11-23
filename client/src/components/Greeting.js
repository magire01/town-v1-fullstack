import React, { useState, useEffect } from "react";

import { Typography, Paper, Grid } from "@material-ui/core";



const Greeting = (props) => {


    const greetingStyle = {
        textAlign: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        marginBottom: 20,
        width: "60%"
    }

    return (
        <div>
            <Grid item md="12" xs="12">
                <Paper style={greetingStyle}>
                    <Typography variant="h4">
                        User: {props.username}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
    
}

export default Greeting;
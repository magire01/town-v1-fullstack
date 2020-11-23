import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";


const TownHome = (props) => {
    
    return (
        <div>
            <Grid container>
                <Grid item md="6" xs="12">
                    <Paper>
                        <p>Town Name: {props.name}</p>
                        <p>Leader: {props.createdByNick}</p>
                    </Paper>
                </Grid>
                <Grid item md="6" xs="12">
                    <Paper>
                        <p>Members:</p>
                        {props.members.map(member => (
                            <p>{member.nickname}</p>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default TownHome;
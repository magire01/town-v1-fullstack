import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const TownHome = (props) => {
    
    const joinTown = (evt) => {
        evt.preventDefault();
        API.putTownUser(props.username, props.nickname, props.name)
        .then(console.log("Successfully Joined Team"))
        .catch(err => console.log(err))
    }

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
                
                <Button onClick={(e) => joinTown(e)}>Join Town</Button>
            </Grid>
            
        </div>
    )
}

export default TownHome;
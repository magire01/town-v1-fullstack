import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import CreatePost from "../components/CreatePost";
import PreviousPost from "../components/PreviousPost";

const ProfileHome = (props) => {

    const divStyle = {
        profile: {
            marginRight: 5
        },
        posts: {
            marginLeft: 5
        }
    }

    return (
        <div>
           
            <Grid container> 
            
                <Grid item md="5" xs="12" style={divStyle.profile}>
                    <Paper>
                        <h3>User:</h3>
                        <p>{props.username}</p>
                    
                        <h3>Profile Name</h3>
                        <p>{props.nickname}</p>
                        
                        <CreatePost username={props.username} nickname={props.nickname} />
                    </Paper>
                </Grid>
           
                <Grid item md="5" xs="12" style={divStyle.posts}>
                    <Paper>
                        <PreviousPost username={props.username} nickname={props.nickname} />
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ProfileHome;
import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import CreatePost from "../components/CreatePost";
import PreviousPost from "../components/PreviousPost";

const ProfileHome = (props) => {

    return (
        <div>
           
            <Grid container> 
            
                <Grid item md="6" xs="12">
                    <Paper>
                        <h3>User:</h3>
                        <p>{props.username}</p>
                    
                        <h3>Profile Name</h3>
                        <p>{props.nickname}</p>
                
            
                        <Typography>
                            Create Post
                        </Typography>
                        
                        <CreatePost username={props.username} nickname={props.nickname} />
                    </Paper>
                </Grid>
           
                <Grid item md="6" xs="12">
                    <PreviousPost username={props.username} nickname={props.nickname} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ProfileHome;
import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import CreatePost from "../components/CreatePost";
import PreviousPost from "../components/PreviousPost";
import SelectedProfile from "../components/SelectedProfile";
import CreateTown from "../components/CreateTown";

const ProfileHome = (props) => {

    const profileHomeStyle = {
        profile: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            alignContent: "center",
            width: "80%"
            
        },
        posts: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            width: "80%"
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item md="6" xs="12">
                    <Paper style={profileHomeStyle.profile}>
                        <SelectedProfile 
                            nickname={props.nickname} 
                            age={props.age} 
                            location={props.location} 
                            something={props.something} />
                        <CreatePost 
                            username={props.username} 
                            nickname={props.nickname} />
                    </Paper>
                </Grid>
           
                <Grid item md="6" xs="12">
                    <Paper style={profileHomeStyle.posts}>
                        <PreviousPost 
                            username={props.username} 
                            nickname={props.nickname} />
                    </Paper>
                </Grid>

                <Grid item md="12" xs="12">
                    <Paper>
                        <CreateTown 
                            username={props.username}
                            nickname={props.nickname}
                            age={props.age}
                            location={props.location}
                            something={props.something}/>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ProfileHome;
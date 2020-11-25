import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import CreatePost from "../components/CreatePost";
import PreviousPost from "../components/PreviousPost";
import SelectedProfile from "../components/SelectedProfile";
import CreateTown from "../components/CreateTown";
import TownSelect from "../components/TownSelect";

const ProfileHome = (props) => {

    const deleteSelectedProfile = (evt) => {
        evt.preventDefault();
        API.deleteProfile(props.username, props.nickname)
        .then(result => console.log("Profile Deleted"))
        .catch(err => console.log(err))
        API.groupLeaveTown(props.town, props.username, props.nickname)
        .then(result => console.log("User Removed from Town"))
        .catch(err => console.log(err))
    }

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
                            username={props.username} 
                            nickname={props.nickname} 
                            age={props.age} 
                            location={props.location} 
                            something={props.something}
                            town={props.town} />
                        <CreatePost 
                            username={props.username} 
                            nickname={props.nickname}
                            town={props.town} />
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
                <Grid item md="12" xs="12">
                    <Paper>
                        <TownSelect 
                            username={props.username}
                            nickname={props.nickname}
                            age={props.age}
                            location={props.location}
                            something={props.something}/>
                    </Paper>
                    <Button onClick={(e) => deleteSelectedProfile(e)}> Delete Profile </Button>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default ProfileHome;
import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button, Card } from "@material-ui/core";

import API from "../utils/API";

import ProfileHome from "../components/ProfileHome";
import CreateProfile from "../components/CreateProfile";

const ProfileSelect = (props) => {

    const [selectProfile, setSelectProfile] = useState({
        username: props.name,
        nickname: null,
        selected: false
    })

    const [showProfile, setShowProfile] = useState({
        username: props.name,
        profileInfo: []
    })
    useEffect(() => {
        API.findProfile(showProfile.username)
            .then(result => setShowProfile({
                ...showProfile,
                profileInfo: result.data
            }))
            .catch(err => console.log(err))
    }, [])

    const buttonStyle = {
        marginBottom: 30,
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        alignContent: "center",
        width: 600
    }

    const profileStyle = {
        mainDisplay: {
            marginBottom: 30,
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            alignContent: "center",
            width: 600
        },
        button: {
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom:10,
            width: 200,
            height: "auto",
            alignText: "center"
        }
    }

    if(!selectProfile.selected)
    return (
        <div>
            <CreateProfile name={props.name}/>
            <Grid container>
                <Grid item md="12" style={profileStyle.mainDisplay}>
                    <Paper style={profileStyle.mainDisplay}>
                        <p>Welcome, {showProfile.username}. Please create a profile or select an existing one. </p>
                    </Paper>

                    
                </Grid>
                <div style={profileStyle.mainDisplay}>
                <Grid item md="12">
                    <p>Profiles for user, {showProfile.username}</p>

                    {showProfile.profileInfo.map((profile) => (
                        <Grid md="12">
                            
                            <Card onClick={() => setSelectProfile({ ...selectProfile, nickname: profile.nickname, selected: true })} style={profileStyle.button}>
                                <Grid item md="12">
                                    <Button>
                                        NickName: {profile.nickname}
                                    </Button>
                                </Grid>
                                <Grid item md="12">
                                    <p style={profileStyle.button}>
                                        Age: {profile.age}
                                    </p>
                                </Grid>
                                <Grid item md="12">
                                    <p style={profileStyle.button}>
                                        Location: {profile.location}
                                    </p>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                </div>
            </Grid>
            
        </div>
    )

    return (
        <div>
            <ProfileHome username={selectProfile.username} nickname={selectProfile.nickname}/>
        </div>
    )
}

export default ProfileSelect;
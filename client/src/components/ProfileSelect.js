import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import ProfileHome from "../components/ProfileHome";

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

    if(!selectProfile.selected)
    return (
        <div>
            <Grid container>
                <Grid item md="12">
                    <p>{showProfile.username} Profiles</p>
                </Grid>
                <Paper>
                <Grid item md="12">
                    {showProfile.profileInfo.map((profile) => (
                        <Grid md="12">
                            
                            <Button onClick={() => setSelectProfile({ ...selectProfile, nickname: profile.nickname, selected: true })}>
                                <Grid item md="12">
                                    NickName: {profile.nickname}
                                </Grid>
                                <Grid item md="12">
                                    Age: {profile.age}
                                </Grid>
                                <Grid item md="12">
                                    Location: {profile.location}
                                </Grid>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                </Paper>
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
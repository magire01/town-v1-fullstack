import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const UserProfile = (props) => {
    
    const [profileState, setProfileState] = useState({
        newProfile: false
    });

    const [showProfile, setShowProfile] = useState({
        username: props.name,
        profileInfo: null

    })

    const [newProfile, setNewProfile] = useState({
        username: props.name,
        nickname: null,
        age: null,
        location: null,
        something: null
    })

    const showAllProfiles = (evt) => {
        evt.preventDefault();
        API.showProfiles()
            .then(result => console.log("ResTest: ", result.data))
            .catch(err => console.log("Get error 2"))
    }
// setShowProfile({
                // ...showProfile,
                // profileInfo: res
                // });
    useEffect(() => {
        API.showProfiles()
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }, [])

    const saveProfile = () => {
        API.createProfile({ 
            username: newProfile.username, 
            nickname: newProfile.nickname, 
            age: newProfile.age, 
            location: newProfile.location,
            something: newProfile.something
         })
            .then(res => console.log("test", res[0].username))
            .catch(err => console.log(err));  
    } 

    const handleNicknameChange = (evt) => {
        setNewProfile({
            ...newProfile,
            nickname: evt.target.value
        })
    }

    const handleAgeChange = (evt) => {
        setNewProfile({
            ...newProfile,
            age: evt.target.value
        })
    }

    const handleLocationChange = (evt) => {
        setNewProfile({
            ...newProfile,
            location: evt.target.value
        })
    }

    const handleSomethingChange = (evt) => {
        setNewProfile({
            ...newProfile,
            something: evt.target.value
        })
    }

    const submitProfile = (evt) => {
        evt.preventDefault();
        saveProfile();
    }



    if(!profileState.newProfile)

    return (
        <Container>
            <Paper>
                <Grid container>
                    <Grid item md="12">
                        <Typography>
                            <Button onClick={(evt) => showAllProfiles(evt)}>Show Profiles</Button>
                        </Typography>

                        <Button onClick={()=> setProfileState({ newProfile: true })}>CREATE PROFILE</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )

    return (
        <Container>
            <Paper>
                <Grid container>
                    <Grid item md="12">
                        <Typography>
                            <Button onClick={(evt) => showAllProfiles(evt)}>Show Profiles</Button>
                        </Typography>

                        <Button onClick={()=> setProfileState({ newProfile: false })}>CREATE PROFILE</Button>
                    </Grid>

                    <Grid item md="12">
                    <form>
                        <Typography variant="subtitle1">Nickname</Typography>
                        <input onChange={handleNicknameChange} />
                        <Typography variant="subtitle1">Age</Typography>
                        <input onChange={handleAgeChange}/>
                        <Typography variant="subtitle1">Location</Typography>
                        <input onChange={handleLocationChange}/>
                        <Typography variant="subtitle1">Something Else</Typography>
                        <input onChange={handleSomethingChange}/>
                        <Grid item md="12">
                            <Button onClick={(evt) => submitProfile(evt)} style={{ backgroundColor: "blue", color: "white" }}>Create Profile</Button>
                        </Grid>
                    </form>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default UserProfile;
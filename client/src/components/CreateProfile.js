import React, { useState } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import ProfileSelect from "../components/ProfileSelect";

const CreateProfile = (props) => {

    const [profileState, setProfileState] = useState({
        newProfile: false
    });

    const [newProfile, setNewProfile] = useState({
        username: props.name,
        nickname: null,
        age: null,
        location: null,
        something: null
    })

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
        setProfileState({
            newProfile: false
        })
    }

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

    const buttonStyle = {
        marginBottom: 30,
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        alignContent: "center",
        width: 600
    }

    if (!profileState.newProfile)
    return (
        <Paper style={buttonStyle}>
                <Grid container>
                    <Grid item md="12">
                        <Button onClick={()=> setProfileState({ newProfile: true })}>CREATE NEW PROFILE</Button>
                    </Grid>
                </Grid>
        </Paper>
    )
    return (
        <Container>
            <Paper style={buttonStyle}>
                <Grid container>
                    <Grid item md="12">
                        <Button onClick={()=> setProfileState({ newProfile: false })}>Exit Create Profile</Button>
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

export default CreateProfile;
import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import Header from "../components/Header";

import API from "../utils/API";

const SignUp = () => {

    const [developerState, setDeveloperState] = useState({
        username: "",
        email: "",
        password: "",
        errors: []
    });

    const saveUser = () => {
        API.saveUser({ username: developerState.username, password: developerState.password })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));  
    } 

    const handleUserChange = evt => {
        const userInput = evt.target.value;
        return setDeveloperState({ ...developerState, username: userInput });
    }

    const handleEmailChange = evt => {
        const emailInput = evt.target.value;
        return setDeveloperState({ ...developerState, username: emailInput });
    }

    const handlePasswordChange = evt => {
        const passInput = evt.target.value;
        return setDeveloperState({ ...developerState, password: passInput })
    }

    const submitForm = evt => {
        evt.preventDefault();

        let dataSubmit = {
            username: developerState.username,
            password: developerState.password
        }

        saveUser();

        console.log("username: ", dataSubmit.username);
    }

    const signUpStyle = {
        form: {
            textAlign: "center",
            color: "#9c2d17"
        },
        formBox: {
            display:"block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "95%"
        },
    }

    return (
        <div>
            <Container>
                <Paper elevation={1} style={signUpStyle.formBox}>
                    <Grid container justify="center" alignContent="center">
                        {/* <Grid item md="12">
                            <Typography variant="h5">Sign Up</Typography>
                        </Grid> */}

                        <Grid item md="12">
                            <form style={signUpStyle.form}>
                                <Typography variant="h5">Sign Up</Typography>
                                <Typography variant="subtitle1">Name</Typography>
                                <input onChange={handleUserChange} />
                                <Typography variant="subtitle1">Email</Typography>
                                <input onChange={handleEmailChange}/>
                                <Typography variant="subtitle1">Password</Typography>
                                <input onChange={handlePasswordChange}/>
                                <Typography variant="subtitle1">Confirm Password</Typography>
                                <input />
                                <Grid item md="12">
                                    <Button onClick={(evt) => submitForm(evt) } style={{ backgroundColor: "blue", color: "white" }}>Create Account</Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )

}

export default SignUp;
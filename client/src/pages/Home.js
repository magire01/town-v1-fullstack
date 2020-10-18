import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import Header from "../components/Header";
import UserHome from "./UserHome";

import API from "../utils/API";


const Home = () => {
    
    const [pageNav, setPageNav] = useState({
        page: "LogIn"
    })

    const [userAuth, setUserAuth] = useState({
        authed: false
    })

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
        setPageNav({ page: "LogIn" })
    }


    const submitLogin = (evt) => {
        evt.preventDefault();

        setPageNav({ page: "Authed" })
        setUserAuth({ authed: true })

    }

    switch (pageNav.page) {
        case "SignUp":
            return (
                <div>
                    <Header auth={false}/>
                    <Container>
                        <Paper elevation={1}>
                            <Grid container justify="center" alignContent="center">
                                <Grid item md="12">
                                    <Typography variant="h5">Sign Up!</Typography>
                                </Grid>

                                <Grid item md="12">
                                    <form>
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
        case "Authed":
            return (
                <div>
                    <Header auth={true} />
                    <UserHome />
                </div>
            )
        default:
            return (
                <div>
                    <Header auth={false} />
                    <Button onClick={()=> setPageNav({ page: "SignUp" })}>Click Here to create an account!</Button>

                    <Container>
                        <Paper elevation={1}>
                            <Grid container justify="center" alignContent="center">
                                <Grid item md="12">
                                    <Typography variant="h5">Log In</Typography>
                                </Grid>

                                <Grid item md="12">
                                    <form>
                                        <Typography variant="subtitle1">Email</Typography>
                                        <input />
                                        <Typography variant="subtitle1">Password</Typography>
                                        <input />
                                        <Grid item md="12">
                                            <Button onClick={(evt) => submitLogin(evt)} style={{ backgroundColor: "blue", color: "white" }}>Submit</Button>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </div>
            )
    }  

}

export default Home;
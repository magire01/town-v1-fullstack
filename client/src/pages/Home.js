import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import Header from "../components/Header";
import HeaderAuth from "../components/HeaderAuth";
import UserHome from "./UserHome";
import SignUp from "../components/SignUp";
import Banner from "../components/Banner";

import API from "../utils/API";


const Home = () => {
    
    const [pageNav, setPageNav] = useState({
        page: "Login"
    })

    const [username, setUsername] = useState({
        username: null
    })
      
    const submitLogin = (evt) => {
        evt.preventDefault();

        setPageNav({ page: "Authed" })

    }

    const handleUsername = (evt) => {
        setUsername({
            username: evt.target.value
        })
    }

    const homeStyle = {
        createAccount: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            height: 100,
            width: 800,
            backgroundColor: "#f5d131",
            color: "#9c2d17",
            fontSize: 30,
            marginBottom: 20,
        },
        loginBox: {
            display:"block",
            marginLeft: "auto",
            marginRight: "auto",
            width: 1000
        },
        loginForm: {
            textAlign: "center",
            color: "#9c2d17"
        }
    }

    

    switch (pageNav.page) {
        case "SignUp":
            return (
                <div>
                    <Banner />
                    <Button onClick={()=> setPageNav({ page: "Login" })} color="secondary" style={homeStyle.createAccount}>Click Here to Login!</Button>
                    <SignUp />
                </div>
        
            )
        case "Authed":
            return (
                <div>
                    <HeaderAuth name={username.username}/>
                </div>
            )
        default:
            return (
                <div>
                    <Banner />
                    <Button onClick={()=> setPageNav({ page: "SignUp" })} color="secondary" style={homeStyle.createAccount}>Create an account!</Button>

                    <Container>
                        <Paper elevation={1} style={homeStyle.loginBox}>
                            <Grid container justify="center" alignContent="center">
                                <Grid item md="12">
                                    <Typography variant="h5" style={homeStyle.loginForm}>Log In</Typography>
                                </Grid>

                                <Grid item md="12">
                                    <form style={homeStyle.loginForm}>
                                        <Typography variant="subtitle1">Username</Typography>
                                        <input onChange={handleUsername}/>
                                        <Typography variant="subtitle1">Password</Typography>
                                        <input />
                                        <Grid item md="12">
                                            <Button onClick={(evt) => submitLogin(evt)} style={{ backgroundColor: "blue", color: "white" }}>Enter</Button>
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
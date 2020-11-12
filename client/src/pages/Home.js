import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import Header from "../components/Header";
import HeaderAuth from "../components/HeaderAuth";
import UserHome from "./UserHome";
import SignUp from "../components/SignUp";


const Home = () => {
    
    const [pageNav, setPageNav] = useState({
        page: "Login"
    })
      
    const submitLogin = (evt) => {
        evt.preventDefault();

        setPageNav({ page: "Authed" })

    }

    switch (pageNav.page) {
        case "SignUp":
            return (
                <div>
                    <Header />
                    <SignUp />
                </div>
        
            )
        case "Authed":
            return (
                <div>
                    <HeaderAuth />
                    <UserHome />
                </div>
            )
        default:
            return (
                <div>
                    <Header />
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
import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

const UserProfile = () => {
    
    const [profileState, setProfileState] = useState({
        newProfile: false
    })

    if(!profileState.newProfile)

    return (
        <Container>
            <Paper>
                <Grid container>
                    <Grid item md="12">
                        <Typography>
                            No Profile Found
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
                            No Profile Found
                        </Typography>

                        <Button onClick={()=> setProfileState({ newProfile: false })}>CREATE PROFILE</Button>
                    </Grid>

                    <Grid item md="12">
                    <form>
                        <Typography variant="subtitle1">Nickname</Typography>
                        <input />
                        <Typography variant="subtitle1">Age</Typography>
                        <input />
                        <Typography variant="subtitle1">Location</Typography>
                        <input />
                        <Typography variant="subtitle1">Something Else</Typography>
                        <input />
                        <Grid item md="12">
                            <Button onClick={() => setProfileState({ newProfile: false })} style={{ backgroundColor: "blue", color: "white" }}>Create Profile</Button>
                        </Grid>
                    </form>
    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default UserProfile;
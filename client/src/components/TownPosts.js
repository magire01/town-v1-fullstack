import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const TownPosts = (props) => {
    
    const [postState, setPostState] = useState({
        data: []
    })

    useEffect(() => {
        API.findTown(props.town)
        .then(result => {
            setPostState({ data: result.data[0].posts })
        })
        .catch(err => console.log(err))
        
    }, [])

    return (
        <Container>
            <Grid container>
                <Grid item md="12">
                {postState.data.map(post => (
                    <Paper style={{ marginTop: 5 }}>
                        <Grid item md="12">
                            <p>
                            {post.nickname}
                            </p> 
                        </Grid>
                        <Grid item md="12">
                            <p>
                            {post.postText}
                            </p> 
                        </Grid>
                    </Paper>
                ))} <Grid item md="12">

                </Grid>
                </Grid>
            </Grid>
        </Container>
    )

}

export default TownPosts;
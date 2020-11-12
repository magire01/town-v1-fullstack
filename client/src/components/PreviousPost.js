import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const PreviousPost = (props) => {

    const [prevPostState, setPrevPostState] = useState({
        username: props.username,
        nickname: props.nickname,
        text: []
    })

    useEffect(() => {
        API.findPosts(props.username, props.nickname)
            .then(result => setPrevPostState({ ...prevPostState, text: result.data }))
            .catch(err => console.log(err))
    }, [])

    if(prevPostState.text === [])

    return (
        <div>
            <Grid container>
                <h5> Previous Posts </h5>
                {prevPostState.text.map((post, index)=> (
                    <Grid item md="12" key={index}>
                        {post.text}
                    </Grid>
                ))}
            </Grid>
        </div>
    )

    return (
        <div>
            <Grid container>
                <h5> No Previous Posts </h5>
            </Grid>
        </div>
    )
}

export default PreviousPost;
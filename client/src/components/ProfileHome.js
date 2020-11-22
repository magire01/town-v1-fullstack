import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import CreatePost from "../components/CreatePost";
import PreviousPost from "../components/PreviousPost";

const ProfileHome = (props) => {

    const [createPost, setCreatePost] = useState({
        selected: false
    })

    if(!createPost.selected)
    return (
        <div>
            <Paper>
                <Grid container>
                    <Grid item md="12">
                        <p>{props.username}</p>
                        <p>{props.nickname}</p>
                    </Grid>
                </Grid>
            </Paper>

            <Button onClick={() => setCreatePost({ selected: true })}>
                Create Post
            </Button>

            <PreviousPost username={props.username} nickname={props.nickname} />
        </div>
    )
    return (
        <div>
            <Paper>
                <Grid container>
                    <Grid item md="12">
                        <p>{props.username}</p>
                        <p>{props.nickname}</p>
                    </Grid>
                </Grid>
            </Paper>

            <Button onClick={() => setCreatePost({ selected: true })}>
                Create Post
            </Button>

            <CreatePost username={props.username} nickname={props.nickname} />

            <PreviousPost username={props.username} nickname={props.nickname} />
        </div>
    )
}

export default ProfileHome;
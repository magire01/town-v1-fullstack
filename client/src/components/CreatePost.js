import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const CreatePost = (props) => {

    const [postState, setPostState] = useState({
        textArea: null,
        postObj: []
    })

    const handleInputChange = (evt) => {
        setPostState ({
            ...postState,
            textArea: evt.target.value
        })
    }

    const submitPost = (evt) => {
        evt.preventDefault();
        API.createPost({ username: props.username, nickname: props.nickname, postText: postState.textArea })
        .then(result => console.log(result))
    }

    const postStyle = {
        textArea: {
            backgroundColor: "lightblue",
            height: 150,
            width: 400
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item md="12">
                    <p>Create Post</p>
                </Grid>
                <form>
                    <Grid item md="12">
                        <textarea style={postStyle.textArea} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item md="12">
                        <Button onClick={(evt) => submitPost(evt)} color="primary" variant="outlined">Post</Button>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}

export default CreatePost;
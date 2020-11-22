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

    return (
        <div>
            <form>
                <textarea onChange={handleInputChange}/>
                <Button onClick={(evt) => submitPost(evt)}>Post</Button>
            </form>
        </div>
    )
}

export default CreatePost;
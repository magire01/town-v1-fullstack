import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const CreatePost = (props) => {

    const [postText, setPostText] = useState({
        text: null
    })

    const handleTextChange = (evt) => {
        setPostText({
            username: props.username,
            nickname: props.nickname,
            text: evt.target.value
        })
    }

    const submitPost = (evt) => {
        evt.preventDefault();
        API.createPost({ 
            username: props.username,
            nickname: props.nickname,
            text: postText.text
        })
    }

    return (
        <div>
            <form>
                <textarea onChange={handleTextChange}/>
                <Button onClick={evt => submitPost(evt)}>Post</Button>
            </form>
        </div>
    )
}

export default CreatePost;
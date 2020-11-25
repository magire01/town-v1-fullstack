import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const DeletePost = (props) => {

    const removePost = () => {
        API.deletePost(props.id)
        API.deletePostTown(props.town, props.id)
        props.function();
    }

    return (
        <Button onClick={() => removePost()}>Delete</Button>
    )
}

export default DeletePost;
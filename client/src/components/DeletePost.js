import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const DeletePost = (props) => {

    const removePost = (evt) => {
        evt.preventDefault();
        API.deletePost(props.id)
    }

    return (
        <Button onClick={(e) => removePost(e)}>Delete</Button>
    )
}

export default DeletePost;
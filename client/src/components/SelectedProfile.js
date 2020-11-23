import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const SelectedProfile = (props) => {

    const [isTown, setIsTown] = useState({
        name: props.town
    })

    const leaveTown = (evt) => {
        evt.preventDefault();
        API.userLeaveTown(props.username, props.nickname)
        .then(result => console.log(result.data))
        .catch(err => console.log(err))

        API.groupLeaveTown(props.town, props.username, props.nickname)
        .then(result => console.log("groupLeave", result.data))
        .catch(err => console.log(err))
    }

    if(isTown.name == null)
    return (
        <div>
            <h3>Profile Name: {props.nickname}</h3>
            <h3>No Town, join one!</h3>
            <h5>Age: {props.age}</h5>
            <h5>Location: {props.location}</h5>
            <h5>Something: {props.something}</h5>
        </div>
    )
    return (
        <div>
            <h3>Profile Name: {props.nickname}</h3>
            <h3>Town: {props.town}</h3> <Button onClick={(e) => leaveTown(e)} color="secondary">Leave Town</Button>
            <h5>Age: {props.age}</h5>
            <h5>Location: {props.location}</h5>
            <h5>Something: {props.something}</h5>
        </div>
    )
}

export default SelectedProfile;
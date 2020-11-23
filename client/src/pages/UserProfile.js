import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import ProfileSelect from "../components/ProfileSelect";
import CreateProfile from "../components/CreateProfile";

const UserProfile = (props) => {

    const [showProfile, setShowProfile] = useState({
        username: props.name,
        profileInfo: null

    })

    return (
        <div>
            <ProfileSelect name={props.name}/>
        </div>
    )
}

export default UserProfile;
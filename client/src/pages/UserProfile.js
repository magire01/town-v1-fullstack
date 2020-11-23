import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import ProfileSelect from "../components/ProfileSelect";
import CreateProfile from "../components/CreateProfile";
import Greeting from "../components/Greeting";

const UserProfile = (props) => {

    const [showProfile, setShowProfile] = useState({
        username: props.name,
        profileInfo: null

    })

    return (
        <div>
            <Greeting username={props.name}/>
            <ProfileSelect name={props.name}/>
        </div>
    )
}

export default UserProfile;
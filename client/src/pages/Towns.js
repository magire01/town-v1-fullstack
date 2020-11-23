import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import TownSelect from "../components/TownSelect";

const Towns = () => {

    // const [showTowns, setShowNews] = useState({
    //     newsArr: []
    // })

    // useEffect(() => {
    //     API.get()
    //     .then(result => setShowNews({ newsArr: result.data }))
    //     .catch(err => console.log(err))
    // }, [])

    

    return (
        <div>
            Towns
            <TownSelect />
        </div>
    )
}

export default Towns;
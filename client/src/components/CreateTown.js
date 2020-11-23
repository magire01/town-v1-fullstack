import React, { useState } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const CreateTown = (props) => {

    const [newTownData, setNewTownData] = useState({
        name: null,
        createdByUser: props.username,
        createdByNick: props.nickname,
        description: null,
        members: [{
            username: props.username,
            nickname: props.nickname,
            age: props.age,
            location: props.location,
            something: props.something
        }]
    })

    const handleTownName = (evt) => {
        setNewTownData({
            ...newTownData,
            name: evt.target.value
        })
    }

    const handleTownDescription = (evt) => {
        setNewTownData({
            ...newTownData,
            description: evt.target.value
        })
    }

    const submitNewTown = (evt) => {
        evt.preventDefault();
        API.createTown({
            name: newTownData.name,
            createdByUser: newTownData.createdByUser,
            createdByNick: newTownData.createdByNick,
            description: newTownData.description,
            members: newTownData.members[0]
        })
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
        
    }
    


    return (
        <div>
            <form>
                <p>Town Name</p>
                <input onChange={handleTownName}></input>
                <p>Description</p>
                <input onChange={handleTownDescription}></input>
                <Button color="primary" onClick={evt => submitNewTown(evt)}>Enter</Button>
            </form>
        </div>
    )

    
}

export default CreateTown;
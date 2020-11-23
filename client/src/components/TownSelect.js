import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button, Card } from "@material-ui/core";

import API from "../utils/API";

import ProfileHome from "../components/ProfileHome";
import CreateProfile from "../components/CreateProfile";

const TownSelect = (props) => {

    const [showTown, setShowTown] = useState({
        townInfo: []
    })

    const [selectTown, setSelectTown] = useState({
        name: null,
        createdByUser: null,
        createdByNick: null,
        description: null,
        members: [],
        selected: false
    })

    useEffect(() => {
        API.getTowns()
            .then(result => setShowTown({
                townInfo: result.data
            }))
            .catch(err => console.log(err))
    }, [])


    if (!selectTown.selected)
    return (
        <div>
            <Grid container>
                <Grid item md="12">
                    {showTown.townInfo.map((town) => (
                        <Grid md="12">
                            
                            <Card onClick={() => setSelectTown({ 
                                ...selectTown,
                                name: town.name,
                                createdByUser: town.createdByUser,
                                createdByNick: town.createdByNick,
                                description: town.description,
                                members: town.members,
                                selected: true
                                 })} 
                        >
                                <Grid item md="12">
                                    <Button>
                                        Name: {town.name}
                                    </Button>
                                </Grid>
                                <Grid item md="12">
                                    <p>
                                        Description: {town.description}
                                    </p>
                                </Grid>
                                <Grid item md="12">
                                    <p>
                                        Created By: {town.createdByNick}
                                    </p>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
    return (
        <div>
            Town Selected
        </div>
    )
}

export default TownSelect;
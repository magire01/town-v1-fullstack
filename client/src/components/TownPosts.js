import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const TownPosts = (props) => {
    
    const [postState, setPostState] = useState({
        data: []
    })

    useEffect(() => {
        API.findTown(props.town)
        .then(result => {
            setPostState({ data: result.data[0].posts })
        })
        .catch(err => console.log(err))
        
    }, [])

    return (
        <div>
            TownPosts
            {postState.data.map(post => (
                <div>
                    <p>
                        {post.nickname}
                    </p>
                    <p>
                        {post.postText}
                    </p>
                </div>
            ))}
        </div>
    )

}

export default TownPosts;
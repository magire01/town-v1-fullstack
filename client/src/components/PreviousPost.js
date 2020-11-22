import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";


const PreviousPost = (props) => {

    const [showPosts, setShowPosts] = useState ({
        username: props.username,
        nickname: props.nickname,
        postArr: []
    })

    useEffect(() => {
        API.showPrevPost(showPosts.username, showPosts.nickname)
            .then(result => setShowPosts({
                ...showPosts,
                postArr: result.data
            }))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div>
                Previous Posts
            </div>
            {showPosts.postArr.map(data => (
                <Grid container>
                    <Paper>
                        <Grid item md="12">
                            <p>
                                {data.postText}
                            </p>
                            
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </div>
    )

}

export default PreviousPost;
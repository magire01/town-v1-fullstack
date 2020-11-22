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


    const postStyle = {
        entire: {
            marginTop: 20,
            marginLeft: 20,
            paddingLeft: 10,
            paddingTop: 10
        },
        individual: {
            marginLeft: 10
        }
    }

    return (
        <div>
            <Container>
                <Grid container style={postStyle.entire}>
                    <Grid item md="12">
                        Previous Posts
                    </Grid>
                    
                {showPosts.postArr.map(data => (
                    <Grid item md="12" style={postStyle.individual}>
                        <p>
                            {data.postText}
                        </p>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </div>
    )

}

export default PreviousPost;
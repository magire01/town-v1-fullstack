import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import DeletePost from "../components/DeletePost";

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
            marginTop: 5,
            marginLeft: 20,
            paddingLeft: 10,
            paddingTop: 10
        },
        individual: {
            marginLeft: 10,
            paddingRight: 20
        }
    }

    return (
        <div>
                <Grid container style={postStyle.entire}>
                    <Grid item md="12" xs="12">
                        Previous Posts
                    </Grid>
                    
                {showPosts.postArr.map(data => (
                    <Grid item md="12" xs="12" style={postStyle.individual}>
                        <p>
                            {data.postText}
                            <DeletePost id={data._id} />
                        </p>
                    </Grid>
                ))}
                </Grid>
        </div>
    )

}

export default PreviousPost;
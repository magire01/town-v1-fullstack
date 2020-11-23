import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

const News = () => {

    const [showNews, setShowNews] = useState({
        newsArr: []
    })

    useEffect(() => {
        API.getNews()
        .then(result => setShowNews({ newsArr: result.data }))
        .catch(err => console.log(err))
    }, [])

    const newsStyle = {
        postDiv: {
            width: "90%"
        },
        name: {
            fontSize: 25,
            paddingLeft: 10,
            textAlign: "right",
            paddingRight: 20,
            paddingTop: 10
        },
        text: {
            fontSize: 17,
            paddingLeft: 20,
            paddingRight: 20
        },
        date: {
            textAlign: "center"
        }
    }

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item md="12" xs="12">
                        <Typography variant="h3"> News</Typography>
                    </Grid>
                    
                    <Grid item md="12" xs="12">
                    {showNews.newsArr.reverse().map(post => (
                        <Paper style={newsStyle.postDiv}>
                            <Typography style={newsStyle.date}> {post.datePosted} </Typography>
                            <Typography variant="h6" style={newsStyle.name}>
                                {post.nickname}
                            </Typography>
                            <Typography style={newsStyle.text}>
                                <p>{post.postText}</p>
                            </Typography>
                        </Paper>
                    ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default News;
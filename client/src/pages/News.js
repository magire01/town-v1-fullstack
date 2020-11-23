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

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item md="12">
                        <Typography variant="h3"> News</Typography>
                    </Grid>
                    
                    <Grid item md="12">
                    {showNews.newsArr.map(post => (
                        <Paper>
                            <Typography>
                                <p>{post.nickname}</p>
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
import React, { useState, useEffect } from "react";

import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import API from "../utils/API";

import TownPosts from "../components/TownPosts";

const News = (props) => {

    const [showNews, setShowNews] = useState({
        newsArr: []
    })

    const [showProfile, setShowProfile] = useState({
        username: props.username,
        profileInfo: []
    })

    // useEffect(() => {
    //     API.findProfile(props.username)
    //     .then(result => {
    //         setShowProfile({ ...showProfile, profileInfo: result.data })
    //         API.showPrevPost(props.username, props.nickname)
    //         .then(post => setShowNews({ newsArr: post.data }))
    //         .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))
        
    // }, [])

    // useEffect(() => {
    //     API.showPrevPost(props.username, props.nickname)
    //     .then(post => setShowNews({ newsArr: post.data }))
    //     .catch(err => console.log(err))
        
    // }, [])

    useEffect(() => {
        API.findProfile(props.username)
        .then(result => {
            setShowProfile({ ...showProfile, profileInfo: result.data })
        })
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
            textAlign: "center",
            fontSize: 10
        }
    }

    // return (
    //     <div>
    //         <Container>
    //             <Grid container>
    //                 <Grid item md="12" xs="12">
    //                     <Typography variant="h3"> News</Typography>
    //                 </Grid>
                    
    //                 <Grid item md="12" xs="12">
    //                 {showNews.newsArr.reverse().map(post => (
    //                     <Paper style={newsStyle.postDiv}>
    //                         <Typography style={newsStyle.date}> {post.datePosted} </Typography>
    //                         <Typography variant="h6" style={newsStyle.name}>
    //                             {post.nickname}
    //                         </Typography>
    //                         <Typography style={newsStyle.text}>
    //                             <p>{post.postText}</p>
    //                         </Typography>
    //                     </Paper>
    //                 ))}
    //                 </Grid>
    //             </Grid>
    //         </Container>
    //     </div>
    // )

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item md="12" xs="12">
                        <Typography variant="h3"> News</Typography>
                    </Grid>

                    <Grid item md="12" xs="12">
                        {showProfile.profileInfo.map(data => (
                            <div>
                                <p>{data.town}</p>
                                <TownPosts town={data.town}/>
                            </div>
                            
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default News;
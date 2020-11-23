import React, { useState, useEffect } from "react";

const SelectedProfile = (props) => {

    return (
        <div>
            <h3>Profile Name: {props.nickname}</h3>
            <h5>Age: {props.age}</h5>
            <h5>Location: {props.location}</h5>
            <h5>Something: {props.something}</h5>
        </div>
    )
}

export default SelectedProfile;
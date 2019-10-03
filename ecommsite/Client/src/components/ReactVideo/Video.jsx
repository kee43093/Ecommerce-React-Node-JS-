import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import "./Video.css";



const Video = () => {
    return (
        <>
         <ReactPlayer className="video" url="https://youtu.be/sVEhFrg1QNE" width="100%"/>
         </>
        )


    }


    export default Video;

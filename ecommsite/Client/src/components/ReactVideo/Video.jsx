import React from '../../../node_modules/react';
import { Link } from '../../../node_modules/react-router-dom';
import ReactPlayer from '../../../node_modules/react-player';
import "./Video.css";



const Video = () => {
    return (
        <>
         <ReactPlayer className="video" url="https://youtu.be/sVEhFrg1QNE" width="100%"/>
         </>
        )


    }


    export default Video;

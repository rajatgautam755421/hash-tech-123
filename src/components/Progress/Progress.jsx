import React from 'react'
import './Progress.css'
import ProgressImg from './progressImg'
import Typewriter from "typewriter-effect";
import ProgressBar from './ProgressBar';

const Progress = () => {
    return (
        <>
            <h3 className="progress__main__h3">
                <Typewriter
                    options={{
                        strings: ["OUR PROCESS"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h3>
            <div className="progress__image container">

                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <ProgressImg />
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress

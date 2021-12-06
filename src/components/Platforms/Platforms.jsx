import React from 'react'
import './Platforms.css'
import Node from '../../assets/PlatformImages/node-js.svg'
import react from '../../assets/PlatformImages/react.svg'
import Angular from '../../assets/PlatformImages/angular.svg'
import Vue from '../../assets/PlatformImages/vue.svg'
import Azure from '../../assets/PlatformImages/azure.svg'
import Typewriter from "typewriter-effect";
import Go from '../../assets/PlatformImages/go-programming-language.svg'
import Solidity from '../../assets/PlatformImages/Solidity-Logo.wine.svg'
import Rust from '../../assets/PlatformImages/rust-programming-language.svg'
import Aws from '../../assets/PlatformImages/aws.svg'
import GoogleCloud from '../../assets/PlatformImages/google-cloud.svg'


const platforms = [
    {
        id: 1,
        image: Node,
        name: "Node JS"
    },
    {
        id: 2,
        image: Angular,
        name: "Angular"
    },
    {
        id: 3,
        image: Vue,
        name: "Vue"
    },
    {
        id: 4,
        image: Azure,
        name: "Azure"
    },
    {
        id: 5,
        image: react,
        name: "React"
    },
    {
        id: 6,
        image: Go,
        name: "Go"
    },
    {
        id: 7,
        image: Solidity,
        name: "Solidity"
    },
    {
        id: 8,
        image: Rust,
        name: "Rust"
    },
    {
        id: 9,
        image: Aws,
        name: "AWS"
    },
    {
        id: 10,
        image: GoogleCloud,
        name: "Google Cloud"
    },
    {
        id: 11,
        image: GoogleCloud,
        name: "Google Cloud"
    },
    {
        id: 12,
        image: GoogleCloud,
        name: "Google Cloud"
    },
    {
        id: 13,
        image: GoogleCloud,
        name: "Google Cloud"
    },
    {
        id: 14,
        image: GoogleCloud,
        name: "Google Cloud"
    },
    {
        id: 15,
        image: GoogleCloud,
        name: "Google Cloud"
    },

]


const Platforms = () => {
    return (
        <>

            <div className="platform__main container-fluid">
                <div className="container">
                    <h3 className="platform__main__h3">
                        <Typewriter
                            options={{
                                strings: ["Tools We Use"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>

                    <div className="row" style={{ display: "flex", justifyContent: "center", paddingLeft: "70px" }}>

                        {
                            platforms.slice(0, 10).map((platform) => {
                                return (
                                    <>
                                        <div className="col-lg-2 col-6" key={platform.id} style={{ marginBottom: "20px" }}>
                                            <h3 className="col__text__h3" >{platform.name}</h3>
                                            <img src={platform.image} alt="Hash Techonolgy" className="platform__image" style={{ width: "100px", height: "100px", marginLeft: "auto", marginRight: "auto", marginTop: "10px", }} />
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/* Blockchain Platforms  */}

        </>
    )
}

export default Platforms

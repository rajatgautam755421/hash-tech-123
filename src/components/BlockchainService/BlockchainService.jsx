import React from "react";
import "./BlockchainService.css";
import Typewriter from "typewriter-effect";
import BlockchainImage from "./BlockchainImage";
import BlockchainImage1 from "../../assets/Blockchain/blockchain.png";
import InfoText from "../InfoText/InfoText";

const BlockchainService = () => {
    return (
        <>
            <h1 className="blockchain__title">
                <Typewriter
                    options={{
                        strings: ["Blockchain Development"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <h4 className="mainservices__h4 container">
                Get a full spectrum of Blockchain development services to expand your
                e-commerce business potency using the highly sophisticated blockchain
                technologies that we offer for data storage, integrity verification, and
                continued transactions.
            </h4>

            <div className="container my-20">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-sm-10 blockchain__col1">
                        <BlockchainImage />
                    </div>
                    <div className="col-md-7 col-sm-10">
                        <h3 className="AD__h3">Block Chain Development </h3>
                        <h5 className="AD__h5">
                            With Us You Get an Oppourtunity to unlock the absolute potential
                            of Blockchain development through our speializations in :
                        </h5>
                        <div className="designsolution">
                            <ul className="designsolution__list">
                                <li className="DS__li">POC Development </li>
                                <li className="DS__li"> Private Blockchain Development</li>
                                <li className="DS__li">Smart Contract Development</li>
                                <li className="DS__li">ICO Turkney Solutions</li>
                                <li className="DS__li">Cryptocurrency And Wallets</li>
                                <li className="DS__li">Decentralized Exchanges</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <InfoText
                image={BlockchainImage1}
                title="Full Spectrum Blockchain Development and Implementation
"
                description="Let us help you understand the significance and usage of blockchain technology specific to your business. In the daily growing network of blockchain technologies, there is no doubt that every business would get into the world of decentralization. We are here to help your businesses with our full-grown exertion in deploying decentralized infrastructure support. As proud technologists amongst the early adopters of blockchain expertise, we have attained a niche position in creating and implementing personalized blockchain applications for a multitude of varied enterprises. This helped them to stay ahead of their competitors in the business race. Our blockchain competency would render a unique identity to your business with improved security and transparency."
            />
        </>
    );
};

export default BlockchainService;

import React from 'react'
import Typewriter from "typewriter-effect";
import AppDevlopmentImages from './AppDevlopmentImages';
import './AppDevlopment.css'
import InfoText from '../InfoText/InfoText';
const AppDevlopment = () => {
    return (
        <>
            <h1 className="mainservices__title">
                <Typewriter
                    options={{
                        strings: ["App Devlopment"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <h5 className="appdev__title container">
                While the usage of mobiles and other hand-devices is witnessing an explosive growth, we find it as an opportunity to place your brand in every users hand. Our integrated expertise in mobile application development facilitates your business with augmented customer reach.
            </h5>

            {/* App Dev Image Section */}
            <div className="container">
                <div className="row">
                    <div className="appdev__col col-md-6 col-sm-10">
                        <AppDevlopmentImages />
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <h3 className="AD__h3" >App Development</h3>
                        <h5 className="AD__h5">Our Multi-platform App Solutions for Android and iOS include:

                        </h5>
                        {/* List */}
                        <div className="designsolution">
                            <ul className="designsolution__list">

                                <li className="DS__li" style={{ fontSize: "18px", listStyle: "none", margin: "20px 0px 20px 0px", fontWeight: "bold" }}> Native Apps
                                </li>
                                <li className="DS__li">iOS on Objective-C or Swift</li>
                                <li className="DS__li"> Android on Java</li>
                                <li className="DS__li">Windows Phone on Net framework</li>
                                <li className="DS__li" style={{ fontSize: "18px", listStyle: "none", margin: "20px 0px 20px 0px", fontWeight: "bold" }}> Native Apps
                                </li>
                            </ul>

                        </div>
                        <ul>
                            <li style={{ fontSize: "18px", listStyle: "none", margin: "10px 0px 10px 0px", fontWeight: "bold" }}>Hybrid Apps For all platforms altogether with Xamarin, React Native, Ionic, Mobile Angular UI, Sencha Touch, etc.</li>
                            <li style={{ fontSize: "18px", listStyle: "none", margin: "10px 0px 10px 0px", fontWeight: "bold" }}> Web apps as responsive versions of the website to work on any mobile device.</li>
                        </ul>

                    </div>

                </div>
            </div>

            {/* Second Section */}
            <InfoText image="https://5.imimg.com/data5/TR/OQ/MY-24528926/mobile-app-development-services-500x500.jpg" title="Full Spectrum Absolute Support On App Development
" description=" Hash Technologies is an equipped mobile app development company that puts your business just a click away from all your prospective users. The iPhone, Android and web apps that we develop for you are highly creative and customer-centric that render a ceaseless, friendly and useful experience to your customers. The experienced mobile app development team at our side holds profound knowledge of frameworks and technologies, indulged in high-quality app development processes. We offer dynamic services as per diverse platforms and believe in time-bound deliveries with a cost-effective approach. Our mobile app portfolio speaks for itself and the work that we stand proud of." />
        </>
    )
}

export default AppDevlopment

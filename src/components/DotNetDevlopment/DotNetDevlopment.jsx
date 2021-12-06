import React from 'react'
import Typewriter from "typewriter-effect";
import './DotNetDevlopment.css'
import DotnetNTyer from './DotnetNTyer';


const DotNetDevlopment = () => {
    return (
        <>
            <h3 className="Net__main__h3">
                <Typewriter
                    options={{
                        strings: [".Net Development"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h3>

            <h5 className="Net__title1 container">
                With years of experience in web development services, we have built large scale web applications and high-performance websites using ASP.NET with C#. Being a proficient and reliable .NET company, we have built cutting-edge applications that foster growth of our clients’ businesses.            </h5>

            <div className="container">
                <div className="row">
                    <div className="designsol__col col-md-6 col-sm-10">
                        <img src="https://hashtechnologies.net/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-12.47.49-PM.jpeg" alt="DotNet Devlopment" className="net__image" />
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <h3 className="designsolution__h3" >.Net Development
                        </h3>
                        <h5 className="designsolution__h5">Hash Technologies offers a vast set of services backed by preeminent technologies and models under the .NET framework
                            Web-based:
                            {/* Design Solution List */}
                            <div className="designsolution">
                                <ul className="designsolution__list">
                                    <li className="DS__li">ASP.NET</li>
                                    <li className="DS__li"> LINO
                                    </li>
                                    <li className="DS__li">Entity Framework</li>
                                    <li className="DS__li">Asp.net web API</li>
                                    <li className="DS__li">WPF</li>
                                    <li className="DS__li">WCF</li>
                                    <li className="DS__li">MVC</li>
                                    <li className="DS__li">N-tier connectivity</li>
                                    <li className="DS__li">Advertisement designing</li>
                                    <li className="DS__li" style={{ fontSize: "18px", listStyle: "none", margin: "20px 0px 20px 0px", fontWeight: "bold" }}>Application-based:
                                    </li>
                                    <li className="DS__li">ADO.NET</li>
                                    <li className="DS__li">VB.NET</li>
                                    <li className="DS__li">C#</li>
                                    <li className="DS__li">N-tier connectivity</li>
                                </ul>
                            </div>

                        </h5>
                    </div>
                </div>
            </div>
            {/* DotNet N-Ryer */}
            <DotnetNTyer />
        </>
    )
}

export default DotNetDevlopment

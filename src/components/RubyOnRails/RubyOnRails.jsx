import React from 'react'
import './RubyOnRails.css'
import Typewriter from 'typewriter-effect'
import InfoText from '../InfoText/InfoText'
const RubyOnRails = () => {
    return (
        <>
            <h1 className="RubyDev__title">
                <Typewriter
                    options={{
                        strings: ["Ruby On Rails"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <h5 className="RubyDev__title1 container">
                Our team consisting of expert RoR developers build applications and web communications for you in no time while taking absolute advantage of Ruby on Rails. Having leveraged the Model-View-Controller model of Rails, we deliver highly scalable web products.            </h5>

            <div className="container ror__container">
                <div className="row">
                    <div className="RubyOnRails__col col-md-6 col-sm-10">
                        <img src="https://hashtechnologies.net/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-12.40.27-PM-1.jpeg" alt="Ruby On Rails" className="rubyonrails__image" />
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <h3 className="RubyOnRails__h3" >Ruby On Rails</h3>
                        <h5 className="RubyOnRails__h5">Our specialized range of Ruby on Rails expertise consists of:
                            {/* Design Solution List */}
                            <div className="RubyOnRails">
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

                        </h5>
                    </div>
                </div>
            </div>
            <InfoText image='https://hashtechnologies.net/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-12.40.27-PM-1.jpeg' title='Benifits From Our Ruby On Rails Consultation'
                description='We help you understand why and where do you need RoR development and implementations. We specialize in dynamic, scalable & end-to-end Ruby on Rails applications with a robust, reliable back-end and a clean, intuitive user interface to scale your business offerings. The major benefit of developing digital products with RoR lies with the modules and gems. This highly sophisticated utility framework requires dramatically less coding. In addition, the integrated testing feature of our RoR framework helps in faster testing of web applications that we develop for you. Get result-driven RoR application development services from our agile software teams of RoR experts.' />
        </>
    )
}

export default RubyOnRails

import React from 'react'
import './MainServices.css'
import Typewriter from "typewriter-effect";
import MainServiceCard from './MainServiceCard';

const Services = [
    {
        id: 1,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Blockchain Devlopment",
        desc: "In the daily growing network of blockchain technologies, there is no doubt that every business would get into the world of decentralization. We are here to help those businesses with our full-grown exertion in deploying decentralized infrastructure support. Our blockchain competency would render a unique identity to your business with improved security and transparency. ",
    },
    {
        id: 2,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Cyber Security",
        desc: "We are cybersecurity experts, security analysts and engineers trained to detect, analyze and respond to cybersecurity incidents and threats, and prevent cyberattacks . Cyber Threat Monitoring platform is the perfect solution to help manage the flood of information and analyze it in real- time to find evidence of security incidents.It accelerates and simplifies threat detection",
    },
    {
        id: 3,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Artificial Intellegence /Machine Learning",
        desc: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
    },
    {
        id: 4,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Internet Of Things",
        desc: "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.The personal or business possibilities are endless.",
    },
    {
        id: 5,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Home Automation",
        desc: "Home automation gives you access to control devices in your home from a mobile device anywhere in the world. … From a home security perspective, this also includes your alarm system, and all of the doors, windows, locks, smoke detectors, surveillance cameras and any other sensors that are linked to it.",
    },
    {
        id: 6,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Web and App Development",
        desc: "Our bankable team of qualified mobile app developers is all equipped to build the applications according to your exact requirement, in your budget and as per your timeline too. We believe in offering creative mobile app solutions to clients around the world ranging from business apps, native apps, to enterprise apps.",
    },
    {
        id: 7,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Ruby On Rails Development",
        desc: "We specialize in dynamic, scalable & end-to-end Ruby on Rails applications with a robust, reliable back-end and a clean, intuitive user interface to scale your business offerings. Our multi-proficiency RoR application development team works in absolute tandem with you to deliver the desired results.",
    },
    {
        id: 8,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "E-commerce",
        desc: "With an unmatched expertise of building and managing multiple e-commerce solutions, our team of design and development experts create unique digital interfaces and products for your e-commerce business. Whether it is about extending the existing retail capabilities or building a completely new e-commerce solution.",
    },
    {
        id: 9,
        image: "https://media.istockphoto.com/photos/blockchain-technology-on-blue-background-picture-id1153383523?k=6&m=1153383523&s=612x612&w=0&h=K5lPiODcZbRGaGUp0jXfCCWdSfYTVrkWDpCxLUHm980=",
        title: "Node & Angular Js Development",
        desc: "Get introduced to the world of brand new development strategies through our wide frame expertise. The MEAN stack is becoming more and more popular. Angular has become the hottest new MVC framework, and we effectively use it with Node and Express which renders a high level of harmony between the client and server. ",
    },



]

const MainServices = () => {
    return (
        <>
            <h1 className="mainservices__title">
                <Typewriter
                    options={{
                        strings: ["Our Services"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <h4 className="mainservices__h4 container">We believe in unmatched service expertise. The team at our outset is endowed with all the pre-requisites and advanced skills to meet the diverse needs of the customers. The wide spectrum of development board that we offer includes</h4>
            <div className="container">
                <div className="Card__row row justify-content-center">
                    {
                        Services.map((service) => {
                            return (
                                <div className="col-md-4 col-11 ">
                                    <MainServiceCard id={service.id} image={service.image} title={service.title} desc={service.desc} key={service.id} />
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MainServices

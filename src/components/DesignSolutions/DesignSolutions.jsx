import React from "react";
import "./DesignSolutions.css";
import Typewriter from "typewriter-effect";
import DesignSolutionsImage from "./DesignSolutionsImage";
import InfoText from "../InfoText/InfoText";

const DesignSolutions = () => {
  return (
    <>
      <h1 className="designsolution__title">
        <Typewriter
          options={{
            strings: ["Designing Solutions"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h5 className="designsolution__title1 container">
        The designing team under our helm strives to understand your vision and
        create an integrated digital strategy for your brand to turn strangers
        into business customers. We believe in pronouncing your brand identity
        with panache in online as well as offline domains.
      </h5>
      <div className="container">
        <div className="row">
          <div className="designsol__col col-md-6 col-sm-10">
            <DesignSolutionsImage />
          </div>
          <div className="col-md-6 col-sm-10">
            <h3 className="designsolution__h3">Designing Solutions</h3>
            <h5 className="designsolution__h5">
              Designing Solutions The A to Z design solutions and
              specializations that we offer include:
              {/* Design Solution List */}
              <div className="designsolution">
                <ul className="designsolution__list">
                  <li className="DS__li">Web development</li>
                  <li className="DS__li">Responsive design</li>
                  <li className="DS__li">Mockups & wireframe designing</li>
                  <li className="DS__li">Logo designing</li>
                  <li className="DS__li">PPT Presentation</li>
                  <li className="DS__li">Graphics designing</li>
                  <li className="DS__li"> Info graphics designing</li>
                  <li className="DS__li">Brochures designing</li>
                  <li className="DS__li"> Advertisement designing</li>
                </ul>
              </div>
            </h5>
          </div>
        </div>
      </div>

      {/* second Content */}
      <InfoText
        image="https://img.freepik.com/free-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg?size=626&ext=jpg"
        title="Understanding Of Design Solutions"
        description="We believe in doing things with absolute passion and commitment. Our core endeavour remains to cater to each client with a fresh perspective offering unique design stories. Client’s contentment is our ultimate objective. Thus, we bring to the fore, unconventional yet relatable designs that speak your vision like none other. Your ideas feed our passion to create reality for you. Building the most desirable brands that drive the change is our motivation and thus we apply futuristic design technologies to express and make an impact. User experiences and feedbacks drive our design strategy and keep the team of creative thinkers and designers on their foot to deliver the best every time"
      />
    </>
  );
};

export default DesignSolutions;

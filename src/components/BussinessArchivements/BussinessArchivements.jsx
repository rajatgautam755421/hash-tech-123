import React from "react";
import "./BussinessArchivement.css";
import BaCard from "./BaCard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleIcon from "@material-ui/icons/People";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Typewriter from "typewriter-effect";
import Flip from "react-reveal/Flip";

const BussinessArc = [
  {
    id: 1,
    index: 6,
    numeric: "25+",
    text: "Projects Delivered",
    Icon: AssignmentIcon,
  },
  {
    id: 2,
    index: 5,
    numeric: "35+",
    text: "Devlopment Staff",
    Icon: PeopleIcon,
  },
  {
    id: 3,
    index: 4,
    numeric: "50k",
    text: "Hours Of Efforts",
    Icon: QueryBuilderIcon,
  },
  {
    id: 4,
    index: 5,
    numeric: "50+",
    text: "Satisfied Clients",
    Icon: ThumbUpAltIcon,
  },
  {
    id: 5,
    index: 6,
    numeric: "10+",
    text: "Years Of Experience",
    Icon: CalendarTodayIcon,
  },
];

const BussinessArchivements = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "40px" }}>
        <h3 className="Ba__main__h3">
          <Typewriter
            options={{
              strings: ["OUR BUSINESS ACHIEVEMENTS"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className="row mt-30">
          {BussinessArc.map((archivements) => {
            return (
              <div className="col-md-4 col-sm-10  justify-content-center">
                <Flip left>
                  <BaCard
                    Icon={archivements.Icon}
                    numeric={archivements.numeric}
                    text={archivements.text}
                    key={archivements.id}
                  />
                </Flip>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BussinessArchivements;

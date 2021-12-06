import React, { lazy, Suspense } from "react";
import Progress from "../components/Progress/Progress";
import Platforms from "../components/Platforms/Platforms";
import { motion } from "framer-motion";
import PhrasesSec from "../components/PhrasesSec/PhrasesSec";
import Loader from "react-loader-spinner";
const BussinessArchivements = lazy(() =>
  import("../components/BussinessArchivements/BussinessArchivements")
);
const HeroSec = lazy(() => import("../components/HeroSec/HeroSec"));

const homeVarients = {
  exit: {
    y: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

const HomePage = () => {
  return (
    <motion.div
      style={{ width: "100% !important", overflow: "hidden" }}
      variants={homeVarients}
      exit="exit"
    >
      <Suspense
        fallback={
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Loader type="ThreeDots" color="#0B5ED7" height={200} width={200} />
          </div>
        }
      >
        <HeroSec />
      </Suspense>
      <PhrasesSec />
      <Progress />
      <Suspense
        fallback={
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Loader type="ThreeDots" color="#0B5ED7" height={200} width={200} />
          </div>
        }
      >
        <BussinessArchivements />
      </Suspense>

      <Platforms />
    </motion.div>
  );
};

export default HomePage;

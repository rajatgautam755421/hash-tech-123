import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import NabBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ContactUs from "./components/ContactUs/ContactUs";
import ScrollRestoration from "./components/ScrollRestoration/ScrollRestoration";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import MainServicePage from "./Pages/MainServicePage";
import ScrollToTop from "react-scroll-to-top";
import BlockChainPage from "./Pages/BlockChainPage";
import AppDevlopmentPage from "./Pages/AppDevlopmentPage";
import DesigningSolutionsPage from "./Pages/DesigningSolutionsPage";
import RubyOnRailsDevlopment from "./Pages/RubyOnRailsDevlopment";
import Loader from "react-loader-spinner";
import DotNetDevlopmentPage from "./Pages/DotNetDevlopmentPage";
import AboutUsPage from "./Pages/AboutUsPage";
import HowAreWeDifferentPage from "./Pages/HowAreWeDifferentPage";
import { AnimatePresence } from "framer-motion";
import HashLabs from "./Pages/HashLabs";

function App() {
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loader ? (
        <Loader
          type="ThreeDots"
          color="#0B5ED7"
          height={200}
          width={200}
          className="main__loader"
        />
      ) : (
        <>
          <ScrollRestoration />
          <ScrollToTop />
          <NabBar />
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="contact-us" exact>
                <ContactPage />
              </Route>
              <Route path="/about-us" exact>
                <AboutUsPage />
              </Route>
              <Route path="/contact-us" exact>
                <ContactUs />
              </Route>
              <Route path="/hash-labs" exact>
                <HashLabs />
              </Route>
              <Route path="/main-services" exact>
                <MainServicePage />
              </Route>
              <Route path="/app-devlopment" exact>
                <AppDevlopmentPage />
              </Route>
              <Route path="/blockchain-devlopment" exact>
                <BlockChainPage />
              </Route>
              <Route path="/designing-solutions" exact>
                <DesigningSolutionsPage />
              </Route>
              <Route path="/ruby-on-rails" exact>
                <RubyOnRailsDevlopment />
              </Route>
              <Route path="/net-development" exact>
                <DotNetDevlopmentPage />
              </Route>
              <Route path="/how-are-we-different" exact>
                <HowAreWeDifferentPage />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import React from "react";
import Footer from "../../templates/footer/footer";
import Header from "../../templates/header/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MainIndex from "../main-index/mainIndex";
import ReportTool from "../report-tool/reportTool";

library.add(fab);

const PageContainer = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainIndex} />
          <Route path="/review-tool" exact component={ReportTool} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default PageContainer;

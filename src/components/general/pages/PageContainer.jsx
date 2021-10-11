import React from "react";
import Footer from "../templates/footer/footer";
import Header from "../templates/header/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import MainIndex from "../../index_homepage/pages/main-index/mainIndex";
import ReportTool from "../../account_review_tool/pages/reportTool";
import UnitPlanner from "../../unit_planner/pages/unit-planner/unit-planner";
import ReportProvider from "../../account_review_tool/context/reportToolProvider";

library.add(fab);

const PageContainer = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainIndex} />
          <ReportProvider>
            <Route path="/review_tool" exact component={ReportTool} />
          </ReportProvider>
          <Route path="/unit_planner" exact component={UnitPlanner} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default PageContainer;

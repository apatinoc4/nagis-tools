import React from "react";
import Footer from "../templates/footer/footer";
import Header from "../templates/header/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import MainIndex from "../../index_homepage/pages/main-index/mainIndex";
import ReportTool from "../../account_review_tool/pages/reportTool";
import UnitPlanner from "../../unit_planner/pages/unit-planner/unit-planner";
import ReportProvider from "../../account_review_tool/context/reportToolProvider";
import PageThemeProvider from "../../../styles/theme-provider";

const PageContainer = () => {
  return (
    <div>
      <PageThemeProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={MainIndex} />
            <ReportProvider>
              <Route path="/review_tool" exact component={ReportTool} />
              <Route path="/unit_planner" exact component={UnitPlanner} />
            </ReportProvider>
          </Switch>
          <Footer />
        </Router>
      </PageThemeProvider>
    </div>
  );
};

export default PageContainer;

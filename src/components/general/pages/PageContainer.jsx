import React from "react";
import Footer from "../templates/footer/footer";
import Header from "../templates/header/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainIndex from "../../index_homepage/pages/main-index/mainIndex";
import ReportTool from "../../account_review_tool/pages/reportTool";
import UnitPlanner from "../../unit_planner/pages/unit-planner/unitPlanner";
import ReportProvider from "../../account_review_tool/context/reportToolProvider";
import PageThemeProvider from "../../../styles/theme-provider";
import ViewportProvider from "../context/viewPortProvider";
import "./PageContainer.scss";

const PageContainer = () => {
  return (
    <ViewportProvider>
      <PageThemeProvider>
        <Router>
          <Header />
          <div className="p-index">
            <Routes>
              <Route
                path="/review_tool"
                exact
                element={
                  <ReportProvider>
                    <ReportTool />
                  </ReportProvider>
                }
              />
              <Route path="/unit_planner" exact element={<UnitPlanner />} />
              <Route path="/" exact element={<MainIndex />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </PageThemeProvider>
    </ViewportProvider>
  );
};

export default PageContainer;

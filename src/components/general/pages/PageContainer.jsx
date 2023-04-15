import React from "react";
import Footer from "../templates/footer/footer";
import Header from "../templates/header/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
          <ReportProvider>
            <Header />
            <Routes>
              <Route path="/" exact element={<MainIndex />} />
              <Route path="/review_tool" exact element={<ReportTool />} />
              <Route path="/unit_planner" exact element={<UnitPlanner />} />
            </Routes>
            <Footer />
          </ReportProvider>
        </Router>
      </PageThemeProvider>
    </div>
  );
};

export default PageContainer;

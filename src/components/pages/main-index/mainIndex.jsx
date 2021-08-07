import React from "react";
import IndexIntro from "../../molecules/index-intro/indexIntro";
import ProjectSection from "../../molecules/project-section/projectSection";

const MainIndex = () => {
  return (
    <div className="p-index-container">
      <IndexIntro />
      <ProjectSection />
    </div>
  );
};

export default MainIndex;

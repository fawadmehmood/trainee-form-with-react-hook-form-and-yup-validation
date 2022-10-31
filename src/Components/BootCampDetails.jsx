import React, { useState, useEffect } from "react";
import BootCamp from "../sharedComponents/BootCamp";
import { bc1, bc2 } from "../selectUtils1";

const BootCampDetails = () => {
  return (
    <div className="row vGap">
      <div className="left">
        <BootCamp key="bc1" bcP={bc1} legendText={"Boot Camp Priority 1"} />
      </div>
      <div className="right">
        <BootCamp key="bc2" bcP={bc2} legendText={"Boot Camp Priority 2"} />
      </div>
    </div>
  );
};

export default BootCampDetails;

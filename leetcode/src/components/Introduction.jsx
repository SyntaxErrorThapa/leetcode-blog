import React from "react";
import Card from "./Card";
import { ProblemLevel } from "./header";
function Introduction() {
  return (
    <>
      
      <div className="container mx-auto flex flex-row justify-center items-center space-x-4">
        {/* For Easy Problem */}
        <div>
          <Card number="0" description="Longest String" />
        </div>

        {/* For Medium Problem */}
        <div>
          <Card number="0" description="Longest String" />
        </div>

        {/* For Hard Problem */}
        <div>
          <Card number="0" description="Longest String" />
        </div>
      </div>
    </>
  );
}

export default Introduction;

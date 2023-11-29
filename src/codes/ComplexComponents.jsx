import React from "react";
import Page from "../Page";
import ccinput from "../Assets/ccinput.png";
import ccoutput from "../Assets/ccoutput.png";

function ComplexComponents() {
  return (
    <div>
      <Page
        title="Complex Components"
        
        content={
          <div>
            - Good for reusability and composability<br/>- Components that contain
            components<br />- For example, a component called SearchResult that
            contains the components ResultImage , ResultCaption and ResultLink
          </div>
        }
        codeimg={ccinput}
        output={ccoutput}
        size={"50%"}
        size2={"50%"}
      />
    </div>
  );
}

export default ComplexComponents;

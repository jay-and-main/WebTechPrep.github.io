import React from "react";
import Page from "../Page";
import propsin from "../Assets/propsin.png";
import ccoutput from "../Assets/ccoutput.png";

function UsingProps() {
  return (
    <div>
      <Page
        title="Better Composite Components"
        content={
          <div>
            - To remove the hardcoding, the properties like src , href etc.,
            have to be passed on using this.props from the parent Components to
            its sub components, as follows
            <br />- If desired, styling may be added as previously discussed
          </div>
        }
        codeimg={propsin}
        output={ccoutput}
        size={"50%"}
        size2={"50%"}
      />
    </div>
  );
}

export default UsingProps;

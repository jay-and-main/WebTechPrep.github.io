import React from "react";
import Page from "../Page";
import statel from "../Assets/statel.png";
import stateo from "../Assets/stateo.png";

function StateLessComp() {
  return (
    <div>
      <Page
        title="Stateless Components"
        content={
          <div>
            - Class-based components are quite heavy
            <br />
            - For some stateless components, function-based components can be
            used
            <br />
            - Properties can be passed as parameters, not using this
          </div>
        }
        codeimg={statel}
        output={stateo}
        size={"50%"}
        size2={"50%"}
      />
    </div>
  );
}

export default StateLessComp;
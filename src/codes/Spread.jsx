import React from "react";
import Page from "../Page";
import spread from "../Assets/spread.png";
import ccoutput from "../Assets/ccoutput.png";

function Spread() {
  return (
    <div>
      <Page
        title="Transferring Properties using Spread Operator [...]"
        content={
          <div>
            - To simplify the tedious process of transferring components, we use
            the spread operator - ...
          </div>
        }
        codeimg={spread}
        output={ccoutput}
        size={"50%"}
        size2={"50%"}
      />
    </div>
  );
}

export default Spread;
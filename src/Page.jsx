import React from "react";

function Page(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Theory:</h2>
      <p style={{ border: "1px solid black" , padding:"20px"  }}>{props.content}</p>
      <h2>Code:</h2>
      <img src={props.codeimg} width={props.size} alt="Code" />
      <h2>Output:</h2>
      <img src={props.output} width={props.size2} alt="Output" />
    </div>
  );
}

export default Page;

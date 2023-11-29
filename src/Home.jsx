import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Ohh So You Wanna Study HUHHHHH!!?</h1>
      <h2>Unit 3 Codes:</h2>
      <h3>Complex Components:</h3>
      <div style={{ marginLeft: "30px" }}>
        <Link to="/complex-components">
          <p>- Complex Components intro</p>
        </Link>
        <Link to="/complex-components-props">
          <p>- Complex Components using Props</p>
        </Link>
        <Link to="/complex-components-spread">
          <p>
            - Complex Components (Transferring properties to different levels of
            componenets using spread operator [...])
          </p>
        </Link>
      </div>
      <h3>Stateless Componenets:</h3>
      <div style={{ marginLeft: "30px" }}>
        <Link to="/stateless"><p>-Stateless Components</p></Link>
      </div>
    </div>
  );
};

export default Home;

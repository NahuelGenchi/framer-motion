import "./Main.scss";

import { MotionContainer } from "../../components";

const Main = function () {
  return (
    <main className="main">
      <h1>Framer Motion</h1>
      <div className="motion-bcontainer">
        <MotionContainer />
      </div>
    </main>
  );
};

export default Main;
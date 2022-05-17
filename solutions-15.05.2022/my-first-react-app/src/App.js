import React from "react";
import { Exc2_1 } from "./components/Exc2_1";
import { Exc2_2 } from "./components/Exc2_2";
import { Exc3_1 } from "./components/Exc3_1";
import { Exc3_2 } from "./components/Exc3_2";
import { Exc4_1 } from "./components/Exc4_1";
import { Exc4_2 } from "./components/Exc4_2";
import { Increment } from "./components/Exc7_1";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* {<Exc2_1 />} */}
        {/* {<Exc2_2 />} */}
        {/* {<Exc3_1 />} */}
        {/* {<Exc3_2 />} */}
        {/* {<Exc4_1 />} */}
        {/* {<Exc4_2 />} */}
        {<Increment />}
      </div>
    );
  }
}

export default App;

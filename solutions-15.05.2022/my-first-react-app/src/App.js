import React from "react";
import { Exc2_1 } from "./components/Exc2_1";
import { Exc2_2 } from "./components/Exc2_2";
import { Exc3_1 } from "./components/Exc3_1";
import { Exc3_2 } from "./components/Exc3_2";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* {<Exc2_1 />} */}
        {/* {<Exc2_2 />} */}
        {/* {<Exc3_1 />} */}
        {<Exc3_2 />}
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;

///example of using jsx variables inside of a class
// class App extends Component {
//   render() {
//     const name = "larry";
//     const showHello = false;
//     const showMath = true;
//     const num1 = 40;
//     const num2 = 23;

//     let math;
//     if (showMath) {
//       math = (
//         <h4>
//           {num1} + {num2} = {num1 + num2}
//         </h4>
//       );
//     } else {
//       math = null;
//     }

//     ///JSX
//     return (
//       <div className="App">
//         <h1>The App Component</h1>
//         {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
//         {math}
//       </div>
//     );
//   }
// }

// export default App;

//can only return one parent element in jsx

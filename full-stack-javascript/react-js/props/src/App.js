import React, { Component } from "react";
import MyComponent from "./components/MyComponent";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.onClickBtn=this.onClickBtn.bind(this)
//   }

//   onClickBtn(){
//     console.log("button clicked")
//   }

//   render() {
//     return (
//       <div>
//         <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
//       </div>
//     );
//   }
// }

function App(){

  function someFunction() {
    console.log('you clicked the button')
  }

  return(
    <div>
      <MyComponent title="hello" fun={someFunction}/>
    </div>
  )
}

export default App;

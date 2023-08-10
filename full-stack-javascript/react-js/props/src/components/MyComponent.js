import React, { Component } from 'react';

// USING CLASS COMPONENTS

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.props.onButtonClicked}>Click me</button>
//       </div>
//     );
//   }
// }

//USING FUNCTIONAL COMPONENTS

function MyComponent(props){
    return(
        <button onClick={()=>props.fun()}>
            {props.title}
        </button>
    )
}

export default MyComponent;
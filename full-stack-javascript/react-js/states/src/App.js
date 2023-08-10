import React, { Component } from "react";  

class App extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.countUp=this.countUp.bind(this)
    }

    countUp(){
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.countUp}>Click me</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default App
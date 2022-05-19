import React from "react"
//import ReactDOM from "react-dom"
class ComponentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
        //this.clickHandler=this.clickHandler.bind(this)
    }
    componentWillMount(){
        console.log("Component Will Mount");
    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    render(){
        return (
        <div>
            <h1>Component Life Cycle</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.clickHandler}>click Me!</button>
        </div>)
    }
    clickHandler=()=>{
        this.setState({count:this.state.count+1})
    }
    shouldComponentUpdate(){
        console.log("It should update r not")
        return true
    }
    componentWillUpdate(){
        console.log("Component will update")
    }
    componentDidUpdate(){
        console.log("Component Did update")
    }
}

export default ComponentLifeCycle;
//import React from 'react';

import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComponentLifeCycle/>
//   </React.StrictMode>
// );


// var name="cvr"
// const element=<div><h1>hello{name}</h1>
//                <h2>good bye </h2>
//                </div>
// //let element1=React.createElement("h1",null,"hello bye")
// let element1=React.createElement("h1",{style:{"color":"red"}},"hello bye")
// function App(){
//     return(
//         <h1 style={{backgroundColor:"pink"}}>this is function</h1>
//     )
// }
// class App1 extends React.Component{
//     render(){
//         return (<div><h1>this is my first component</h1>
//         <h2>hie</h2></div>)
//     }
// }
//ReactDOM.render(<App1/>,document.getElementById('root'))
//or
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App1 />);


//ReactDOM.render(<h1>hello-{name}</h1>,document.getElementById('root'))
//ReactDOM.render(element1,document.getElementById('root'))



// const root=ReactDOM.createRoot(
//     document.getElementById('root'))
//     function tick(){
// const element=(
//     <div>
//         <h1>hello this is time</h1>
//         <h2>it is {new Date().toLocaleTimeString()}.</h2>
//     </div>
// );
// root.render(element);
//     }
// setInterval(tick,1000);



// function Root(props){
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <Child1></Child1>
//             <Child2></Child2>
//             <Child3></Child3>
//             <Child4></Child4>
//         </div>
            
//     )
// }
// function Child1(){
//     return <h1 style={{backgroundColor:"red",color:"pink"}}>this is child1</h1>
// }
// function Child2(){
//     return <h1>this is child2</h1>
// }
// function Child3(){
//     return <h1>this is child3</h1>
// }
// function Child4(){
//     return <h1>this is child4</h1>
// }

// ReactDOM.render(<Root name="nandini"/>,document.getElementById('root'))

// class Root1 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={name:"cvr college",salary:1222}
//     }
//     render(){
//         return(
//             <div>hello{this.state.name}</div>
//         )
//     }
// }
//ReactDOM.render(<Root1/>,document.getElementById('root'))

// function Listt(){
//     const emp=[{"name":"nandini","id":"2"},{"name":"nandu","id":"1"}]
//     return(
//         <div>
//             <h1>arrays to lists</h1>
//         <ul>
//         {emp.map(emps=><div>
//             <li>{emps.name}</li>
//             <li>{emps.id}</li>
//             </div>)}
//         </ul>
//         </div>
//     )
// }
// ReactDOM.render(<Listt/>,document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Listt/>);


function Listt(){
        const emp=[{"name":"nandini","id":"2"},{"name":"nandu","id":"1"}]

              const myStyle = {
                color: "white",
                backgroundColor: "pink",
                padding: "10px",
                fontFamily: "Sans-Serif"
                     };

        return(
            <div>
{/* <h1 style={myStyle}>Hello Style!</h1> */}
                 <h1>arrays to lists</h1>
            <table style={myStyle} border="10" cellPadding={12} >
           <tr>
                  <th >names</th>
                 <th >ids</th>
            </tr>
            {emp.map(emps=>
                
                <tr>
                    <td>{emps.name}</td>
                    <td>{emps.id}</td>
                </tr>

                    )}

            </table>
            </div>
        )
    }
    ReactDOM.render(<Listt/>,document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//import React from 'react';


//for componentlifecycle
// import ComponentLifeCycle from './componentLifeCycle';
// ReactDOM.render(<ComponentLifeCycle/>,document.getElementById("root"))


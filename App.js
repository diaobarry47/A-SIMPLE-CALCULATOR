import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Navigation from './components/Navigation';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {output: ""};
  }

  render(){
    let IntegerA,IntegerB,IntegerC,select;
    

    return(
      <div className="container">
      <div className="got">
        <div className="Calculator">
          <h2>Calculator</h2>
        </div>
          
        <div>
          <label>
            <input className="form-control mr-sm-2" type="text" placeholder="Enter the first number" ref="input1"></input>
          </label>
        </div>
        <div>
          <label>
            <input className="form-control mr-sm-2" type="text" placeholder="Enter the second number" ref="input2"></input>
          </label>
        </div>
        <div>
          <label>
            <select className="btn btn-outline-success my-2 my-sm-0" ref="select1" width='50%'>
              <option value="+">Add</option> 
              <option value="-">Substract</option>
              <option value="*">Multiply</option>
              <option value="/">Divide</option>
            </select>

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={ () => {
              IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
              IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
              select = this.refs.select1.value
              console.log(select);

              if (this.refs.select1.value == "+") 
                {
                  IntegerC = IntegerA+IntegerB
                } 
              else if (this.refs.select1.value == "-") 
                {
                  IntegerC = IntegerA-IntegerB
                } 
              else if (this.refs.select1.value == "*") 
                {
                  IntegerC = IntegerA*IntegerB
                } 
              else
                {
                  IntegerC = IntegerA/IntegerB
                };

              this.setState({output:IntegerC})
              }
            }
              

          >COUNT</button>
          
          </label>
        </div>
        <div>
          <label>
            <input className="form-control mr-sm-2" type="text" placeholder="0" value={this.state.output}></input>
          </label>
        </div>
        
      </div>        
      </div>          
        
    );
  }
}

export default App;

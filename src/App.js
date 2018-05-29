import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Billing Application
        </p>
        <Name />

      </div>

    );
  }
}

// class Name extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       selectedItem : 'Select Item',
//       Quanity:'Quanity',
//       Cost:'Cost'
//     } ;
//   }
//   itemsDropDownSelect = (event) => {
//     this.setState({selectedItem : event.target.value});
//   }
//   quanityDropDownSelect = (event) => {
//     this.setState({Quanity : event.target.value});
//   }
//   costDropDownSelect = (event) => {
//     this.setState({Cost : event.target.value});
//   }
//   dropDownClick= (event) => {
//       var x = document.getElementById("mySelect").selectedIndex;
//   }
//
//   render(){
//     return(
//       <div>
//         <p>Name</p>
//         <select id="items" onChange = {this.itemsDropDownSelect} value = {this.state.selectedItem}>
//             <option>Select Items</option>
//             <option value="1">Rice</option>
//             <option value="2">ChanaDal</option>
//             <option value="3">Maggie</option>
//             <option value="4">ThroDal</option>
//         </select>
//         <select id="Quanity" onChange = {this.quanityDropDownSelect} value = {this.state.Quanity}>
//             <option>Quanity</option>
//             <option value="q1">5</option>
//             <option value="q2">7</option>
//             <option value="q3">1</option>
//             <option value="q4">3</option>
//         </select>
//         <select id="Cost" onChange = {this.costDropDownSelect} value = {this.state.Cost}>
//             <option>Cost</option>
//             <option value="c1">55</option>
//             <option value="c2">70</option>
//             <option value="c3">10</option>
//             <option value="c4">5</option>
//         </select><br />
//       <button type="button" onClick={this.dropDownClick}>Total</button>
//       </div>
//
//     );
//   }
// }

export default App;

import React, { Component } from 'react';


class Name extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedItem : '',
        Quanity:'',
        Cost:'',
        totolPrice:null
            };
  }
itemsDropDownSelect = (event) => {
    this.setState({selectedItem : event.target.value,totolPrice:null});
  }
  quanityDropDownSelect = (event) => {
    this.setState({Quanity : event.target.value,totolPrice:null});

  }
  costFromUser = (event) => {
      this.setState({cost : event.target.value,totolPrice:null});

  }

  selected = () => {
    console.log('yyyyyyyyyyyyyyyyy')
    const {Quanity,cost}=this.state
    let result=Quanity*cost;
    this.setState({totolPrice:result})
  if(typeof this.state.Quanity==='undefined' || this.state.Quanity==="" || this.state.selectedItem ==='undefined' || this.state.selectedItem === ""||this.state.cost === "" ||this.state.cost=='undefined'){
    alert('Please fill all the details before before clicking on total');
  }
  }


  render(){
    return(
      <div>

        <select id="items" onChange = {this.itemsDropDownSelect} value = {this.state.selectedItem}>
            <option>Select Items</option>
            <option value="55">Rice</option>
            <option value="60">ChanaDal</option>
            <option value="10">Maggie</option>
            <option value="80">ThroDal</option>
        </select>
        <select id="Quanity" onChange = {this.quanityDropDownSelect} value = {this.state.Quanity}>
            <option>Quanity</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="1">1</option>
            <option value="3">3</option>
        </select>
        <div>
          Cost: <input type="text" id="cost" placeholder="enter cost" name="cost" onChange={this.costFromUser} value = {this.state.cost}/>
        </div>
        <div>
        <button type="button" onClick={this.selected}>Total</button>
        </div>
        {this.state.totolPrice!=null && this.state.totolPrice}
    </div>

    );
  }
}


export default Name;

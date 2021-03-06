import React, { Component } from 'react';
import { addRecipe }  from '../actions';
import { connect } from 'react-redux'



class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1> Hello World </h1>
      </div>
    );
  }
}

function mapStateToProps({calendar}){
  const dayOrder = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals,meal)=>{
        meals[meal] = calendar[day][meal]
        ? calendar[day][meal]
        : null
        return meals
      },{})
    }))
  }
}

export default connect(mapStateToProps)(App);

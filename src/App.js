import React from "react";
import { connect } from "react-redux";
import { set_data } from "../src/store/action";
import './App.css';

class App extends React.Component {
  render(){
    console.log("mapStateToProps in App Page ==>", this.props);
    return(
      <div>
        <h1>Hello Hanif</h1>
        <button onClick={()=>this.props.set_data()}>SET DATA</button>
      </div>
    )
  }
}

//In the funcation below we getting the data from redux
const mapStateToProps = (state) => ({
  users: state.users  //getting from reducer
   //the above property is saved in the props of of App component
})

//To set data in the redux/oir global state we use below function
const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data())

    })


export default connect(mapStateToProps, mapDispatchToProps) (App);

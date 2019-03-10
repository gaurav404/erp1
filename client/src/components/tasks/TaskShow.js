import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Moment from 'react-moment'
import '../../css/task.css'
import Card from './taskCard'
class TaskShow extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    const state = this.props.location.state;

    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
        		<div className="jumbotron">
        			<h1>{state.title}</h1>

        			<h3>Mentor:{state.teacher}</h3>
        		</div>
        		<p className="spacing">{state.text}</p>
        		<hr/>
        		<h4 className="spacing">18/10/2019</h4>
        		<h4 className="spacing">max period assigned: 3 months</h4>
        		<button className="btn btn-primary bspacing">view submitted papers</button>
        		<button className="btn btn-primary bspacing" >submit paper</button>
          </div>
        </div>
    	</div>
    );
  }
};

export default TaskShow;

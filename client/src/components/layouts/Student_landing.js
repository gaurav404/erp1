import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import '../../css/student_landing.css'
class MainS extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  onProfile(){
    this.props.history.push('/student/profile');
  }
  onTasks(){
    this.props.history.push('/student/tasks');
  }
  onJournals(){
    this.props.history.push('/showJournals');
  }
  onAcademics(){
    this.props.history.push('/showAcademics');
  }
  onAssistanship(){
    this.props.history.push('/showAssistantship');
  }
  onResearch(){
    // this.props.history.push('/profile');
  }
  onPapers(){
    this.props.history.push('/showPapers');
  }
  onSeminars(){
    this.props.history.push('/showSeminars');
  }
  
  render(){
    return(
      <div className="Main">
          <div className="container1 container">
            <div className="item" style={{backgroundColor: "#44B3C2"}} onClick={this.onProfile.bind(this)}>PROFILE</div>
            <div className="item" style={{backgroundColor: "#44B3C2"}} onClick={this.onTasks.bind(this)}>TASKS</div>
            <div className="item" style={{backgroundColor: "#F1A94E"}} onClick={this.onJournals.bind(this)}>JOURNALS</div>
            <div className="item" style={{backgroundColor: "#F1A94E"}} onClick={this.onAcademics.bind(this)}>ACADEMICS</div>
            <div className="item" style={{backgroundColor: "#E45641"}} onClick={this.onAssistanship.bind(this)}>ASSISTANSHIP</div>
            <div className="item" style={{backgroundColor: "#E45641"}} onClick={this.onResearch.bind(this)}>RESEARCH</div>
            <div className="item" style={{backgroundColor: "#5D4C46"}} onClick={this.onPapers.bind(this)}>PAPERS</div>
            <div className="item" style={{backgroundColor: "#5D4C46"}} onClick={this.onSeminars.bind(this)}>SEMINARS</div>
          </div>
      </div>
    )

  }
}
const mapStateToProps =(state)=>({
  message:state.message
});
export default connect(mapStateToProps,{})(MainS);
// export default Main;

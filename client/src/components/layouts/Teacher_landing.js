import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import '../../css/teacher_landing.css'
class MainT extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  onProfile(){
    this.props.history.push('/teacher/profile');
  }
  onTasks(){
    this.props.history.push('/teacher/tasks');
  }
  onPapers(){
    // this.props.history.push('/addJournal');
  }
  onStudentList(){
    this.props.history.push('/showStudents');
  }
  render(){
    return(
      <div className="Main">
          <div className="container1 container">
            <div className="item" style={{backgroundColor: "#44B3C2"}} onClick={this.onProfile.bind(this)}>PROFILE</div>
            <div className="item" style={{backgroundColor: "#F1A94E"}} onClick={this.onPapers.bind(this)}>PAPERS</div>
            <div className="item" style={{backgroundColor: "#E45641"}} onClick={this.onTasks.bind(this)}>TASKS</div>
            <div className="item" style={{backgroundColor: "#5D4C46"}} onClick={this.onStudentList.bind(this)}>STUDENT'S LIST</div>
          </div>
      </div>
    )

  }
}
const mapStateToProps =(state)=>({
  message:state.message
});
export default connect(mapStateToProps,{})(MainT);
// export default Main;

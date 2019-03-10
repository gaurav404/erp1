import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {deleteEducation} from '../..actions/profileActions'
import Moment from 'react-moment'
import styles from '../../css/task_student.css'
import Card from './taskCard'
class Tasks extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    const Tasks = [
      {
        key:'1',
        title:"Image Processing",
        teacher:"Navneet",
        text:"He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing"
      },
      {
        key:'2',
        title:"Artificial Intilligence",
        teacher:"Prakash",
        text:"He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing"
      },
      {
        key:'4',
        title:"Artificial Intilligence",
        teacher:"Tushar",
        text:"He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing"

      },
      {
        key:'5',
        title:"Image Processing",
        teacher:"Rajiv",
        text:"He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing"

      }
    ]
    const taskData=Tasks.map(data=>
      <Card key={data.key} title={data.title} teacher={data.teacher} text={data.text}/>
    )
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
              {taskData}
          </div>
        </div>
      </div>
    );
  }
};

export default Tasks;

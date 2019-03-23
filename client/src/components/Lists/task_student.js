import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class TasksStudent extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onSubmit(){
      this.props.history.push('/addPaper');
  }
  render(){
    const tasks=[
      {
        id:'s234',
        mentor:'Mark',
        title: 'abcd',
        dateCreated:'16/03/44',
        status:'ongoing',
        deadline:'01/01/50'
      },
      {
        id:'s235',
        mentor:'Mark',
        title:'efgh',
        dateCreated:'16/13/44',
        status:'ongoing',
        deadline:'01/01/50'
      },
      {
        id:'s236',
        mentor:'Mark',
        title: 'ijkl',
        dateCreated:'16/13/44',
        status:'ongoing',
        deadline:'01/01/50'
      }
    ]
    const tabledata = tasks.map(task=>
      <tr key={task.id}>
        <td>{task.mentor}</td>
        <td>{task.title}</td>
        <td>{task.dateCreated}</td>
        <td>{task.status}</td>
        <td>{task.deadline}</td>
        <td>
          <button onClick={this.onSubmit.bind(this)} className="btn btn-info">submit paper</button>
        </td>
      </tr>
    );
    return(
      <div className="container">
        <br/>
        <br/>
        <h4 className="mb-4">Tasks</h4>
        <table className="table">
          <thead>
            <tr>
              <th>MENTOR</th>
              <th>TITLE</th>
              <th>DATE CREATED</th>
              <th>STATUS</th>
              <th>DEADLINE</th>
              <th>SUBMIT</th>
            </tr>
          </thead>
          <tbody>
            {tabledata}
          </tbody>
        </table>
      </div>
    );
  }
};

export default TasksStudent;

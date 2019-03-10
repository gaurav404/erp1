import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class Teachers extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  render(){
    const teachers=[
      {
        id:'s234',
        name:'Mark',
        teacherid:'16-1-3-44',
        currentProject:'Pk',
        email:'asdf@sd.com'
      },
      {
        id:'s234',
        name:'Mark',
        teacherid:'16-1-3-44',
        currentProject:'Pk',
        email:'asdf@sd.com'
      },
      {
        id:'s234',
        name:'Mark',
        teacherid:'16-1-3-44',
        currentProject:'Pk',
        email:'asdf@sd.com'
      }
    ]
    const tabledata = teachers.map(teacher=>
      <tr key={teacher.id}>
        <td>{teacher.teacherid}</td>
        <td>{teacher.name}</td>
        <td>{teacher.currentProject}</td>
        <td>{teacher.email}</td>
        <td><button onClick={this.onDelete.bind(this)} className="btn btn-danger">Delete</button></td>
      </tr>
    );
    return(

      <div className="container">
        <br/>
        <br/>
        <h4 className="mb-4">Teachers</h4>
        <table className="table">
          <thead>
            <tr>
              <th>TEACHER ID</th>
              <th>NAME</th>
              <th>Current Project</th>
              <th>Email</th>
              <th></th>
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

export default Teachers;

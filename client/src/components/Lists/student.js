import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class Students extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  render(){
    const students=[
      {
        id:'s234',
        name:'Mark',
        scholarid:'16-1-3-44',
        mentor:'Pk',
        email:'asdf@sd.com'
      },
      {
        id:'s2334',
        name:'Mark',
        scholarid:'16-1-3-44',
        mentor:'Pk',
        email:'asdf@sd.com'
      },
      {
        id:'s233',
        name:'Mark',
        scholarid:'16-1-3-44',
        mentor:'Pk',
        email:'asdf@sd.com'
      }
    ]
    const tabledata = students.map(stu=>
      <tr key={stu.id}>
        <td>{stu.scholarid}</td>
        <td>{stu.name}</td>
        <td>{stu.mentor}</td>
        <td>{stu.email}</td>
        <td><button onClick={this.onDelete.bind(this)} className="btn btn-danger">Delete</button></td>
      </tr>
    );
    return(
      <div className="container">
        <br/>
        <br/>
        <h4 className="mb-4">Students</h4>
        <table className="table">
          <thead>
            <tr>
              <th>SCHOLARID</th>
              <th>NAME</th>
              <th>MENTOR</th>
              <th>EMAIL</th>
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

export default Students;

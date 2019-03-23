import React,{Component} from 'react'
import {connect} from 'react-redux'
import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class Papers extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onUpdate(){

  }
  onAdd(){
    this.props.history.push('/addPaper');
  }
  onView(){
    this.props.history.push('/showPaper');
  }
  render(){
    const papers=[
      {
        TaskName:'ECHI-BD',
        AssignedBy:'Mark',
        ReviewedBy:'N.partha',
        LastUpdated:'16/12/18',
        Deadline:'16/12/19',
        status: 'submitted'
      },
      {
        TaskName:'BU-1301',
        AssignedBy:'Mark',
        ReviewedBy:'N.partha',
        LastUpdated:'16/12/18',
        Deadline:'16/12/19',
        status: 'pending'
      },
      {
        TaskName:'s234',
        AssignedBy:'Mark',
        ReviewedBy:'N.partha',
        LastUpdated:'16/12/18',
        Deadline:'16/12/19',
        status: 'submitted'
      },
    ]
    var UpdateButton=<button onClick={this.onUpdate.bind(this)} className="btn btn-danger">Update</button>;
    var tabledata=[];
    for(var i=0;i<papers.length;i++){
      if(papers[i].status==='pending')
        UpdateButton=<button onClick={this.onUpdate.bind(this)} className="btn btn-danger">Update</button>;
      else
        UpdateButton='';

     tabledata.push( <tr>
        <td>{papers[i].TaskName}</td>
        <td>{papers[i].AssignedBy}</td>
        <td>{papers[i].ReviewedBy}</td>
        <td>{papers[i].LastUpdated}</td>
        <td>{papers[i].Deadline}</td>
        <td className={papers[i].status}>{papers[i].status}</td>
        <td>
        <button onClick={this.onView.bind(this)} className="btn btn-info">View</button>
        {UpdateButton}
        </td>
      </tr>
      );
    }
    return(
      <div className="container">
        <button onClick={this.onAdd.bind(this)} className="btn btn-info">add new paper</button>
        <br/>
        <br/>
        <h4 className="mb-4">Papers</h4>
        <table className="table">
          <thead>
            <tr>
              <th>TaskName</th>
              <th>AssignedBy</th>
              <th>ReviewedBy</th>
              <th>LastUpdated</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
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

export default Papers;

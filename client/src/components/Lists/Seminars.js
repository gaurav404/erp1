import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'
import '../../css/status.css';

class Seminars extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  onAdd(){
    this.props.history.push('/addSeminar');
  }
  render(){
    const seminars=[
      {
        id:'s234',
        seminar_id:'E134',
        date:'07/08/2018',
        topic:'AI',
        venue:'Nit Silchar',
        bills:'',
        status:'Accepted'        
      },
      {
        id:'s2324',
        seminar_id:'E124',
        date:'07/08/2018',
        topic:'IOT',
        venue:'Nit Silchar',
        bills:'',
        status:'Rejected'        
      },
      {
        id:'s2134',
        seminar_id:'E144',
        date:'07/08/2018',
        topic:'WebDev',
        venue:'Nit Silchar',
        bills:'',
        status:'Pending'        
      }
    ]
    const tabledata = seminars.map(sem=>
      <tr key={sem.id}>
        <td>{sem.seminar_id}</td>
        <td>{sem.date}</td>
        <td>{sem.topic}</td>
        <td>{sem.venue}</td>
        <td>{sem.bills}</td>
        <td className={sem.status}>{sem.status}</td>
      </tr>
    );
    return(
      <div className="container">
        <button onClick={this.onAdd.bind(this)}className="btn btn-info">add new seminar</button>
        <br/>
        <br/>
        <h4 className="mb-4">SEMINARS</h4>
        <table className="table">
          <thead>
            <tr>
              <th>SEMINAR_ID</th>
              <th>DATE</th>
              <th>TOPIC</th>
              <th>VENUE</th>
              <th>BILLS</th>
              <th>STATUS</th>
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

export default Seminars;

import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class Journals extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  onAdd(){
    this.props.history.push('/addJournal');
  }
  render(){
    const journals=[
      {
        id:'s234',
        journal_id:'E134',
        topic:'Mark',
        pub_name:'Pk',
        date:'07/08/2018'
      },
      {
        id:'s2134',
        journal_id:'E144',
        topic:'Mark',
        pub_name:'Pk',
        date:'07/08/2018'
      },
      {
        id:'s2234',
        journal_id:'E154',
        topic:'Mark',
        pub_name:'Pk',
        date:'07/08/2018'
      }
    ]
    const tabledata = journals.map(journal=>
      <tr key={journal.id}>
        <td>{journal.journal_id}</td>
        <td>{journal.topic}</td>
        <td>{journal.pub_name}</td>
        <td>{journal.date}</td>
        <td><button onClick={this.onDelete.bind(this)} className="btn btn-danger">Delete</button></td>
      </tr>
    );
    return(
      <div className="container">
        <button onClick={this.onAdd.bind(this)}className="btn btn-info">add new journal</button>
        <br/>
        <br/>
        <h4 className="mb-4">Journals</h4>
        <table className="table">
          <thead>
            <tr>
              <th>JOURNAL_ID</th>
              <th>TOPIC</th>
              <th>PUBLISHER'S NAME</th>
              <th>DATE</th>
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

export default Journals;

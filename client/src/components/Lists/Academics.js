import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'


class Academics extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  onAdd(){
    this.props.history.push('/addAcademics');
  }
  render(){
    const academics=[
      {
        id:'s234',
        session:'July/2019-Dec/2019',
        sem:'fifth',
        cpi:'7.08'      
      },
      {
        id:'s2314',
        session:'Jan/2019-May/2019',
        sem:'sixth',
        cpi:'8.01'      
      }, {
        id:'s2234',
        session:'Jan/2019-May/2019',
        sem:'seventh',
        cpi:'8.34'      
      }
    ]
    const tabledata = academics.map(aca=>
      <tr key={aca.id}>
        <td>{aca.session}</td>
        <td>{aca.sem}</td>
        <td>{aca.cpi}</td>
      </tr>
    );
    return(
      <div className="container">
        <button onClick={this.onAdd.bind(this)}className="btn btn-info">add new academics</button>
        <br/>
        <br/>
        <h4 className="mb-4">ACADEMICS</h4>
        <table className="table">
          <thead>
            <tr>
              <th>SESSION</th>
              <th>SEMESTER</th>
              <th>CPI</th>
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

export default Academics;

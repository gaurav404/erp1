import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {deleteEducation} from '../../actions/profileActions'
import Moment from 'react-moment'

class Assistants extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  onDelete(){

  }
  render(){
    const assistants=[
      {
        id:'s234',
        work_time:'Part Time',
        faculty:'Mark',
        stipend:'8000',
        status:'Part',
        starting_date:'06/07/2015',
        tenure_end:'06/09/2015'
      },
      {
        id:'s2314',
        work_time:'Full Time',
        faculty:'Mark',
        stipend:'8000',
        status:'Full',
        starting_date:'06/07/2015',
        tenure_end:'06/09/2015'
      },
      {
        id:'s2324',
        work_time:'Full Time',
        faculty:'Mark',
        stipend:'8000',
        status:'Regular',
        starting_date:'06/07/2015',
        tenure_end:'06/09/2015'
      }
    ]
    const tabledata = assistants.map(ast=>
      <tr key={ast.id}>
        <td>{ast.work_time}</td>
        <td>{ast.faculty}</td>
        <td>{ast.stipend}</td>
        <td>{ast.status}</td>
        <td>{ast.starting_date}</td>
        <td>{ast.tenure_end}</td>
      </tr>
    );
    return(

      <div className="container">
        <button className='btn btn-info'>add Assistantship</button>
        <br/>
        <br/>
        <h4 className="mb-4">ASSISTANTSHIP</h4>
        <table className="table">
          <thead>
            <tr>
              <th>WORKING TIME</th>
              <th>FACULTY</th>
              <th>STIPEND/MONTH</th>
              <th>STATUS</th>
              <th>STARTING DATE</th>
              <th>TENURE END</th>
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

export default Assistants;

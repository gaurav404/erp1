import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {deleteEducation} from '../..actions/profileActions'
import Moment from 'react-moment'
import styles from '../../css/paper.css'
import Box from './paperCard'
class Paper extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    const papers = [
      {
        key:'1',
        title:"Image Processing",
        student:'Mark',
        sch_id:'17-15-034',
        teacher:"Navneet",
        text:"He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing He could hear singing too, beneath the pealing"
      }
    ]
    const paperData=papers.map(data=>
      <Box key={data.key} title={data.title} student={data.student} sch_id={data.sch_id} teacher={data.teacher} text={data.text}/>
    )
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
              {paperData}
          </div>
        </div>
      </div>
    );
  }
};

export default Paper;

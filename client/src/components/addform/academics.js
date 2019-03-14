import React,{Component} from 'react'
// import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class AcademicsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Session:'',
      Semester:'',
      CPI:'',
      AdmissionDate:'',
      error:''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
  }

  render(){
    // const options = [
    //   {label:'Male',value:'Male'},
    //   {label:'Female',value:'Female'},
    //   {label:'Others',value:'Others'},
    // ];
    // const options2 = [
    //   {label:'General',value:'General'},
    //   {label:'OBC',value:'OBC'},
    //   {label:'SC',value:'SC'},
    //   {label:'ST',value:'ST'},

    // ];
    const {error} = this.state;
    return(
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br/>
              <br/>
              <h4 className="display-4 text-center">ADD ACADEMICS</h4>
              <small className="from-text text-muted">*required fields</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="Session" placeholder="enter session" value={this.state.Session} onChange={this.onChange} error={error.Session} />
                <InputFieldTextGroup name="Semester" placeholder="enter Semester" value={this.state.Semester} onChange={this.onChange} error={error.Semester} />
                <InputFieldTextGroup name="CPI" placeholder="enter CPI" value={this.state.CPI} onChange={this.onChange} error={error.CPI} />
                <InputFieldTextGroup type="date" name="AdmissionDate" placeholder="enter date" value={this.state.AdmissionDate} onChange={this.onChange} error={error.AdmissionDate} />
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AcademicsForm;
//export default connect(null,{})(StudentFcaste

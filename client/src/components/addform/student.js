import React,{Component} from 'react'
import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      middleName:'',
      lastName:'',
      birthday:'',
      scholarid:'',
      email:'',
      caste:'',
      gender:'',
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
    const options = [
      {label:'Male',value:'Male'},
      {label:'Female',value:'Female'},
      {label:'Others',value:'Others'},
    ];
    const options2 = [
      {label:'General',value:'General'},
      {label:'OBC',value:'OBC'},
      {label:'SC',value:'SC'},
      {label:'ST',value:'ST'},

    ];
    const {error} = this.state;
    return(
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br/>
              <br/>
              <h4 className="display-4 text-center">ADD STUDENT</h4>
              <small className="from-text text-muted">*required fields</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="firstName" placeholder="enter your first name" value={this.state.firstName} onChange={this.onChange} error={error.firstName} />
                <InputFieldTextGroup name="middleName" placeholder="enter your middle name" value={this.state.middleName} onChange={this.onChange} error={error.middleName} />
                <InputFieldTextGroup name="lastName" placeholder="enter your last name" value={this.state.lastName} onChange={this.onChange} error={error.lastName} />
                <InputFieldTextGroup type="date" name="birthday" placeholder="enter your birthday" value={this.state.birthday} onChange={this.onChange} error={error.birthday} />
                <InputFieldTextGroup name="scholarid" placeholder="enter your ScholarID" value={this.state.scholarid} onChange={this.onChange} error={error.scholarid} />
                <InputFieldTextGroup type="email" name="email" placeholder="enter your email" value={this.state.email} onChange={this.onChange} error={error.email} />
                <SelectTextGroup name="gender" value={this.state.gender} onChange={this.onChange} error={error.gender} options={options}/>
                <SelectTextGroup name="caste" value={this.state.caste} onChange={this.onChange} error={error.caste} options={options2}/>

                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StudentForm;
//export default connect(null,{})(StudentFcaste

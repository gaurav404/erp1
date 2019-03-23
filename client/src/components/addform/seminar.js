import React,{Component} from 'react'
// import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class SeminarForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Topic:'',
      venue:'',
      bills:'',
      status:'',
      date:'',
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
      {label:'accepted',value:'accepted'},
      {label:'rejected',value:'rejected'},
      {label:'pending',value:'pending'},
    ];
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
              <h4 className="display-4 text-center">ADD SEMINAR</h4>
              <small className="from-text text-muted">*required fields</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="Topic" placeholder="enter topic" value={this.state.Topic} onChange={this.onChange} error={error.Topic} />
                <InputFieldTextGroup name="venue" placeholder="enter venue" value={this.state.venue} onChange={this.onChange} error={error.venue} />
                <InputFieldTextGroup name="bills" placeholder="enter bills" value={this.state.bills} onChange={this.onChange} error={error.bills} />
                <SelectTextGroup name="status" value={this.state.status} onChange={this.onChange} error={error.status} options={options}/>
                <InputFieldTextGroup type="date" name="date" placeholder="enter date" value={this.state.date} onChange={this.onChange} error={error.date} />
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SeminarForm;
//export default connect(null,{})(StudentFcaste
// <div className="form-group">
//                   <select id="Select" name="status" placeholder="select status" onChange={this.onChange} error={error.Topic} className="form-control">
//                     <option>accepted</option>
//                     <option>pending</option>
//                     <option>rejected</option>
//                   </select>
//                 </div>

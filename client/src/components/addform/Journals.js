import React,{Component} from 'react'
import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class JournalForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Topic:'',
      publisherName:'',
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
              <h4 className="display-4 text-center">ADD JOURNAL</h4>
              <small className="from-text text-muted">*required fields</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="Topic" placeholder="enter topic" value={this.state.Topic} onChange={this.onChange} error={error.Topic} />
                <InputFieldTextGroup name="publisherName" placeholder="enter publisher name" value={this.state.publisherName} onChange={this.onChange} error={error.publisherName} />
                <InputFieldTextGroup type="date" name="date" placeholder="enter starting date" value={this.state.date} onChange={this.onChange} error={error.date} />


                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default JournalForm;
//export default connect(null,{})(StudentFcaste

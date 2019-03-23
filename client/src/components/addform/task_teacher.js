import React,{Component} from 'react'
import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Title:'',
      DateCreated:'01/01/99',
      Deadline:'01/01/00',
      Description: '',
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
      {label:'ongoing',value:'ongoing'},
      {label:'complete',value:'complete'}
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
              <h4 className="display-4 text-center">ADD NEW TASK</h4>
              <small className="from-text text-muted">*required</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <InputFieldTextGroup name="Title" placeholder="enter task-title" value={this.state.Title} onChange={this.onChange} error={error.Title} />
                <InputFieldTextGroup label="date of creation" type="date" name="DateCreated"  value={this.state.DateCreated} onChange={this.onChange} error={error.DateCreated} />              
                <InputFieldTextGroup type="date" name="Deadline" label="enter Deadline" value={this.state.Deadline} onChange={this.onChange} error={error.Deadline} />
                <TextAreaFieldGroup name="Description" placeholder="enter description" value={this.state.Description} onChange={this.onChange} error={error.Description}/>
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskForm;
//export default connect(null,{})(StudentFcaste

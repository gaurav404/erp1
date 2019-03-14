import React,{Component} from 'react'
import {connect} from 'react-redux'

import SelectTextGroup from '../common/SelectFieldTextGroup'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class PaperForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      Task:'',
      PaperLink:'',
      Date:'',
      Deadline:'01/01/00',
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
      {label:'abcd',value:'abcd'},
      {label:'efgh',value:'efgh'},
      {label:'ijkl',value:'ijkl'},
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
              <h4 className="display-4 text-center">ADD NEW PAPER</h4>
              <small className="from-text text-muted">select task</small>
              <form onSubmit={this.onSubmit} className="form-group">
                <SelectTextGroup name="Task" value={this.state.Task} onChange={this.onChange} error={error.Task} options={options}/>
                <InputFieldTextGroup name="PaperLink" placeholder="enter paper-link" value={this.state.PaperLink} onChange={this.onChange} error={error.PaperLink} />
                <InputFieldTextGroup type="date" name="Date" placeholder="enter date" value={this.state.Date} onChange={this.onChange} error={error.Date} />
                <p>Deadline: {this.state.Deadline}</p>
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PaperForm;
//export default connect(null,{})(StudentFcaste

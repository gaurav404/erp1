import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../../css/paper.css'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
          comment:'',
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
      const error='';
    const {title,student,sch_id,teacher,text} = this.props
    return(
      <div className="card" style={{display:'inline-block', float:'left',width:'100%',boxSizing:'border-box'}}>
        <div className="card-body">
          <h1 className="card-title">{this.props.title} By {this.props.student} ({this.props.sch_id})</h1>
          <h3>Mentor: <Link to="/profile/123243" style={{color:'grey'}}>{this.props.teacher}</Link></h3>
          <br/>
          <div className="card-text content">
             {this.props.text.substring(0,400)+"....."}
          </div>
          <br/>
          <h5>links:</h5><Link to=""></Link>
          <br/>
          <p>Source:xyz</p>
          <br/>
          <h3>Comments:</h3>
          <ul>
              <li>Hi,I am doing this project</li>
          </ul>
          <br/>
          <form onSubmit={this.onSubmit} className="form-group">
               <InputFieldTextGroup name="comment" placeholder="write your comment here" value={this.state.comment} onChange={this.onChange} error={error.comment} />
               <button type="submit" style={{width:'100px'}}className="btn btn-info btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Box;

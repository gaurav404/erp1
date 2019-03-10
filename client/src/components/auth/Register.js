import React, { Component } from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      errors:{},
      message:''
    };
    this.setMessage = this.setMessage.bind(this);
  }
  componentWillReceiveProps(newProps){
    // if(newProps.error){
    //   this.setState({
    //     errors:newProps.error.error
    //   })
    // }
  }
  componentDidMount(){
    // if(this.props.auth.isAuthenticated){
    //   this.props.history.push('/dashboard');
    // }
  }

  onChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.email)
    const newUser={
      email:this.state.email
    }
    axios.post('/api/register',newUser).then(res=>{
      this.setState({
        message:res.data.success,
      })

      //this.props.history.push('/register');
    })
    //this.props.registerUser(newUser,this.props.history);
  }
  setMessage(){
    this.setState({
      message:''
    })
  }
  render() {
    const rt = this.state.message.length===0?(''):(
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> {this.state.message}
        <button type="button" onClick={this.setMessage}class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

    )
    const {errors} = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {rt}
              <h1 className="display-4 text-center">Sign Up</h1>
              <form noValidate action="create-profile.html" onSubmit={this.onSubmit}>
                <InputFieldTextGroup type="email" error={errors.email} placeholder="Email Address" value={this.state.email} onChange={this.onChange} name="email" />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  auth:state.auth,
  error:state.error
});
export default connect(null,{})(withRouter(Register));

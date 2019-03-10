import React, { Component } from "react";
import {connect} from 'react-redux'
import {setUser} from '../../actions/authActions'
import {setError} from '../../actions/global'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
import {setMessage} from '../../actions/global'
import axios from 'axios'
import isEmpty from '../../validation/isEmpty'
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      message:''
    };
  }
  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  componentDidMount(){
    // if(this.props.auth.isAuthenticated){
    //   this.props.history.push('/dashboard');
    // }
  }
  componentWillReceiveProps(nextProps){
    // if(nextProps.auth.isAuthenticated){
    //   this.props.history.push('/dashboard');
    // }else if(nextProps.error){
    //   this.setState({
    //     errors:nextProps.error.error
    //   })
    // }
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const userData={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('/api/login',userData)
      .then(res=>{
        if(!isEmpty(res.data.user)){
          this.props.setUser(res.data.user);
          this.props.setMessage('you are now logged in');
          this.props.setError({});
          this.props.history.push('/');
        }
      }).catch(err=>{
        console.log(err.response.data);
        this.props.setError(err.response.data);
      })
  }

  render() {
    const rt = this.state.message.length===0?(''):(
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> {this.state.message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
    const errors = this.props.error.error;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {rt}
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your account
              </p>
              <form onSubmit={this.onSubmit}>
                <InputFieldTextGroup error={errors.email} placeholder="Email Address" value={this.state.email} onChange={this.onChange} name="email" />
                <InputFieldTextGroup type="password" error={errors.password} placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  error:state.error,
  auth:state.auth
})

export default connect(mapStateToProps,{setUser,setMessage,setError})(Login);

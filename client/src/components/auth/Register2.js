import React, { Component } from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import InputFieldTextGroup from '../common/InputFieldTextGroup'
class Register2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      password2:'',
      errors:{}
    };
  }
  componentWillReceiveProps(newProps){
    // if(newProps.error){
    //   this.setState({
    //     errors:newProps.error.error
    //   })
    // }
  }
  componentDidMount(){

  }
  onChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = (e)=>{
    e.preventDefault();
    const newUser={
      email:this.state.email,
      password:this.state.password,
      password2:this.state.password2,
      token:this.props.match.params.token
    }
    axios.post('/api/new-password',newUser)
      .then(res=>{
        this.props.history.push('/login');
      }).catch(err=>
        this.setState({
          errors:err.response.data
        })
      )
  }

  render() {

    const {errors} = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <form noValidate action="create-profile.html" onSubmit={this.onSubmit}>
                <InputFieldTextGroup type="email" error={errors.email} placeholder="Email Address" value={this.state.email} onChange={this.onChange} name="email" />
                <InputFieldTextGroup type="password" error={errors.password} placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
                <InputFieldTextGroup type="password" error={errors.password2} placeholder="Confirm Password" value={this.state.password2} onChange={this.onChange} name="password2" />

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
export default connect(mapStateToProps,{})(withRouter(Register2));

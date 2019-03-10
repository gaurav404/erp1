import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Route,Redirect} from 'react-router-dom'

class PrivateRoute extends Component {
  render(){
    const Component = this.props.component;
    const {isAuthenticated} = this.props.auth;
    const rest = this.props.rest;
    return(
      <Route {...rest} render={(props)=>
        isAuthenticated?<Component {...props} />:<Redirect to='/login'/>
      }/>
    );
  }
}
PrivateRoute.propTypes={
  auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
  auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute)

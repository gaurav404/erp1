import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import {logout} from '../../actions/authActions'
import {setUser} from '../../actions/authActions'
class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {};
    this.logout = this.logout.bind(this);
  }
  logout = (e)=>{
    //e.preventDefault();
    this.props.setUser({});
    this.props.logout();
    //this.props.history.push('/login')
  }
  render(){
    const profile = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link className="nav-link" to='/login'> Login </Link>
        </li>
        <li>
          <Link className="nav-link" to='/register'> Register </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/addJournal"> AddJournals
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addStudent"> AddStudent
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addTeacher"> AddTeacher
          </Link>
        </li>
        <li>
          <Link className="nav-link" to='/login' onClick={this.logout}> Logout </Link>
        </li>
      </ul>
    );
    const {isAuthenticated} = this.props.auth;
    return(
      <div className="Nav">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to="/">ERP</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                {isAuthenticated?profile:""}
                {isAuthenticated?authLinks:guestLinks}
              </div>
            </div>
        </nav>
      </div>
    )

  }
}
const mapStateToProps =(state)=>({
  message:state.message,
  auth:state.auth
});
export default connect(mapStateToProps,{logout,setUser})(Navbar);

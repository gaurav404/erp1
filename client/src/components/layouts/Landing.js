import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="Main">
          <div className="container">
          </div>
      </div>
    )

  }
}
const mapStateToProps =(state)=>({
  message:state.message
});
export default connect(mapStateToProps,{})(Main);

import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class Card extends Component {
  render(){
    const {title,teacher,text} = this.props
    return(
      <div className="card" style={{display:'inline-block', float:'left',width:'33%',boxSizing:'border-box',height:'600px'}}>
        <div className="card-body">
          <h1 className="card-title">{this.props.title}</h1>
          <h3>Mentor: <Link to="/profile/123243">{this.props.teacher}</Link></h3>
          <br/>
          <div className="card-text">
             {this.props.text.substring(0,400)+"....."}
          </div>
          <br/>
          <button type="button" className="btn btn-default" ><Link to={{pathname:'/taskShow',state:{title:title,teacher:teacher,text:text}}}>show details</Link></button>
        </div>
      </div>
    );
  }
}
export default Card

import React,{Component} from 'react'
import profile from '../../img/profile.png'

class ProfileModal extends Component {
  render(){
    return(
      <div className="Container">
        <div className="span3 well">
            <center>
              <a href="#aboutModal" data-toggle="modal" data-target="#myModal"><img src={profile} name="aboutme" style={{width:"140px" ,height:"140px"}} className="img-circle"/></a>
              <h3 style={{color: 'grey'}}>Prakash Jha </h3>
              <em style={{color: 'grey'}}>Click my face for more</em>
            </center>
        </div>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 className="modal-title" id="myModalLabel">More About Prakash</h4>
                        </div>

                        <div className="modal-body">

                            <img src={profile} name="aboutme" style={{width:"140px" ,height:"140px"}} className="img-circle"/>
                            <h3 className="media-heading" >Prakash Jha <small>(Student,NIT Silchar)</small></h3>
                            <span><strong style={{color:'grey'}}>Details: </strong></span>
                            <br/>
                            <span className="card badge ml-1" style={{borderColor:'black'}}>Phd. Scholar:16-1-5-053  </span>
                            <span className="card badge ml-1 " style={{borderColor:'black'}}>Mentor:Partha Pakray  </span>
                            <span className="card badge ml-1 " style={{borderColor:'black'}}>prakashjha@gmail.com  </span>
                            <span className="card badge ml-1 " style={{borderColor:'black'}}>dd/mm/yyyy  </span>

                            <p style={{color:'grey'}} className="text-left"><strong>Tasks Assigned: </strong><br/>
                                <ol>
                                	<li style={{color:'grey'}}>Presentation</li>
                                	<li style={{color:'grey'}}>submission</li>
                                </ol>
                            </p>
                        </div>
                    <div className="modal-footer">
                        <center>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Exit</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ProfileModal

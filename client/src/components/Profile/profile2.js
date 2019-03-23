import React,{Component} from 'react'
import profile from '../../img/profile.png'
import "../../css/profile.css"
class ProfileModal extends Component {
  render(){
    return(
      <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <img className="image" src={profile} />
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="name">
                        <h1>Prakash Jha (Phd. Scholar, NIT Silchar)</h1>
                        <h4>Phd. Scholar: 16-15-053</h4>
                        <h4>Mentor: Partha Pakray</h4>
                        <h4>E-mail: prakashjha@gmail.com </h4>
                        <h4>dd/mm/yyyy</h4>
                    </div>
                </div>
            </div>
      </div>      
    );
  }
}
export default ProfileModal

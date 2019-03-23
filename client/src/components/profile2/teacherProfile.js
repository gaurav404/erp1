import React,{Component} from 'react'
<<<<<<< HEAD
import download from '../../img/download.jpg'
=======
import download from '../../img/profile.png'
>>>>>>> e7f00504f67812f90e479ca0b38ff84f4592493a

class Teacherprofile extends Component {
  render(){
    return(
      <div className="container">
          <div>
            <div className="panel-heading lead">
                <div className="row">
                    <div className="col-lg-8 col-md-8"><i className="fa fa-users"></i> Teacher Details</div>
                </div>
            </div>
            <br/>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <center>
                        <span className="text-left">
                          <img src={download} className="img-responsive img-thumbnail"/>
                          <div className="modal fade" id="PhotoOption" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                            <div className="modal-dialog" style={{width:"30%",height:"30%"}}>
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                  <h4 className="modal-title text-success" id="myModalLabel"><i className="fa fa-gear"></i> <span className="text-right">Viddhyut Mall</span></h4>
                                </div>
                                <div className="modal-body">
                                  <center><img src="upload/profile_pic/701b4263f7d38604699b7c1f89a3e6a6.jpg" className="img-responsive img-thumbnail"/></center>
                                </div>
                                <div className="modal-footer">
                                    <a href="upload/upload-view.php?id=68" className="btn btn-success"><i className="fa fa-photo"></i> Upload</a>
                                    <a href="upload/upload-view.php?id=68&amp;name=Viddhyut Mall&amp;src=view" className="btn btn-danger"><i className="fa fa-trash"></i> Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </center>

                      <div className="table-responsive panel">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="text-center">
                                <span className="btn btn-danger text-success btn-block"><i className="fa fa-rupee"></i>Something</span>
                                <a href="#" className="btn btn-success btn-block" dataToggle="modal" dataTarget="#PhotoOption"><i className="fa fa-photo"></i>Profile</a>
                              </td>
                            </tr>
                          </tbody>
                       </table>
                     </div>
                  </div>
                  <div className="col-lg-9 col-md-9">
                      <ul className="nav nav-tabs">
                        <li className="active" style={{paddingLeft:"1%"}}><a data-toggle="tab" href="#Summery" className="text-success"><i className="fa fa-indent"></i> Summary </a></li>
                        <li style={{paddingLeft:"2%"}}><a data-toggle="tab" href="#Contact" className="text-success"><i className="fa fa-bookmark-o"></i> Contact Info</a></li>
                        <li style={{paddingLeft:"2%"}}><a data-toggle="tab" href="#Address" className="text-success"><i className="fa fa-home"></i> Address</a></li>
                        <li style={{paddingLeft:"2%"}}><a data-toggle="tab" href="#General" className="text-success"><i className="fa fa-info"></i> General Info</a></li>
                      </ul>
                      <div className="tab-content">
                        <div id="Summery" className="tab-pane fade in active">
                          <div className="table-responsive panel">
                            <table className="table">
                              <tbody>
                                <tr>
                                    <td className="text-success"><i className="fa fa-user"></i> Full Name</td>
                                    <td>Tushar Tanoy Sarma</td>
                                </tr>
                                <tr>
                                    <td className="text-success"><i className="fa fa-list-ol"></i> Teacher Id</td>
                                    <td>16-12-3-3233</td>
                                </tr>
                                <tr>
                                    <td className="text-success"><i className="fa fa-book"></i>Branch</td>
                                    <td>Computer Science Deapartment</td>
                                </tr>
                                <tr>
                                    <td className="text-success"><i className="fa fa-group"></i> Designation</td>
                                    <td>Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="text-success"><i className="fa fa-calendar"></i> Birthday</td>
                                    <td>December 2, 2011</td>
                                </tr>

                                <tr>
                                  <td className="text-success"><i className="fa fa-university"></i> Year of joining</td>
                                  <td>2014</td>
                                </tr>
                                <tr>
                                  <td className="text-success"><i className="fa fa-university"></i>Area of Interest</td>
                                  <td>DataBase Management System, Networking</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      <div id="Address" className="tab-pane fade">
                          <div className="table-responsive panel">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="text-success"><i className="fa fa-home"></i> Address</td>
                                  <td>
                                    <address>
                                      <strong>Faculty Head Quarter </strong><br/>block-B 1264<br/>Nit Silchar<br/>
                                    </address>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-success"><i className="fa fa-home"></i> Office</td>
                                  <td>
                                    <address>
                                      <strong>Computer Science Deaprtment</strong><br/>2nd floor<br/>
                                    </address>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                      </div>
                      <div id="Contact" className="tab-pane fade">
                        <div className="table-responsive panel">
                          <table className="table">
                            <tbody>
                              <tr>
                                  <td className="text-success"><i className="fa fa-envelope-o"></i> Email ID</td>
                                  <td><a href="mailto:****@pawanmall.net?subject=Email from &amp;body=Hello, Viddhyut Mall">tu@pawanmall.com</a></td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Mobile Number</td>
                                  <td>88********</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Alternate Mobile Number</td>
                                  <td>88********</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="fa fa-flag"></i> Nationality</td>
                                  <td>Indian</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="fa fa-user"></i> Emergency Contact Person</td>
                                  <td>Pawan Mall</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Emergency Contact Person's Mobile</td>
                                  <td>+91 88********</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div id="General" className="tab-pane fade">
                        <div className="table-responsive panel">
                          <table className="table">
                            <tbody>
                              <tr>
                                  <td className="text-success"><i className="fa fa-calendar"></i> Academic Year</td>
                                  <td>2015-2020</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="fa fa-medkit"></i> Medical Condition</td>
                                  <td>Normal</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="fa fa-thumbs-up"></i> Active/Inactive</td>
                                  <td>Student is Active</td>
                              </tr>
                              <tr>
                                  <td className="text-success"><i className="glyphicon glyphicon-time"></i> Last Editing</td>
                                  <td>2015-08-20 09:41:56</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Teacherprofile;

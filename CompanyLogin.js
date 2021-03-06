import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import Navbar from "./Navbar.js"
import './Login.css';

class CompanyLogin extends Component {


  render() {
    return (
<div>
      <div className="sidebar">
        <ul>
            <li><a href="#" class="nav-link px-3">
                <i class="material-icons icon">
                  person
                </i>
                <span class="text">User Profile</span>
              </a></li>
            <li><a href="#" class="nav-link px-3">
                <i class="material-icons icon">
                  pageview
                </i>
                <span class="text">View Certificate</span>
              </a></li>
            <li><a href="#" class="nav-link px-3">
                <i class="material-icons icon">
                  exit_to_app
                </i>
                <span class="text">Log Out</span>
              </a></li>
        </ul>
    </div>

    <div class="container-fluid mt-5">
        <div class="row">
            <main role="main" class="col-lg-50 d-flex text-center">

                <div className="content mr-auto ml-auto"><center>
                    <h1><center>Profile</center></h1>
                    <div>
                          <form name="a">
                          <div>
                              Name:<input type="text" className="form-a"/>
                          </div>
                          <br/>
                          <div>
                              Email:<input type="text" className="form-a"/>
                          </div>
                          <br/>
                          <div>
                              UID  :<input type="text" className="form-a"/>
                          </div>
                          </form>
                    </div>
                    </center>
                </div>
            </main>
          </div>


          <div class="row">
            <main role="main" class="col-lg-100">
                <div id="content"><center>
                    <h1><center>View Certificate</center></h1>
                    <div>
                        <br/>
                        <form name="b">
                            <div>
                                Transaction hash:<input type="text" name="cid" className="form-b"/>
                            </div>
                            <br/>
                            <div>
                                <center><button id="snd" type="submit">ViewCertificate</button></center>
                            </div>
                        </form>
                    </div>
                    </center>
                </div>

            </main>
        </div>
      </div>
    </div>
    );
  }
}

export default CompanyLogin;

import React, {Component} from  'react';
import Form from '../../components/subcomponents/forms/login-form/Form'
import Navbar from '../../components/viewComponents/NavBar'
import Footer from '../../components/viewComponents/Footer'
class Login extends Component {

 
    render(){
        return(
  <div>
      <Navbar></Navbar>
    <div className="login-dark divForm" >
        <Form >
   



        
        </Form>
    </div>
    <Footer></Footer>
    </div>
        );
    }
}
export default Login;
import React, {Component} from  'react';
import Form from '../../components/subcomponents/forms/login-form/Form'
import Input from '../../components/subcomponents/forms/login-form/Input'
import Link from 'react-dom'
class Login extends Component {
    constructor(props){
        super(props);
        this.State = {
            form_text: 'Formulario de login',
           required : true,
           input_type: 'email',
           maxlength : '65',
           minlenght: '15',
           placeholder:'E-mail'
        }
    }
 
    render(){
        return(

    <div className="login-dark divForm" >
        <Form textTitle={this.State.form_text}>
        <Input  
               
               ></Input>
        <Input input_type={this.State.input_type} 
               required={this.State.required} 
               maxlength={this.State.maxlength} 
               minlenght={this.State.minlenght} 
               placeholder={this.State.placeholder} 
               
               ></Input>       



        <Link href="/" className="forgot">Forgot your email or password?</Link>
        </Form>
    </div>
        );
    }
}
export default Login;
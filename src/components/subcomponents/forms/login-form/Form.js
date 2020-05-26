import React, {Component} from  'react';
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Button from './Button'


class LoginForm extends Component {


    render(){
        return (
            <form  className="form">
            <h2 className="sr-only">Formulário de Login</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline i-icon" ></i></div>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
            <Button></Button>
            <a href="/" className="forgot">Forgot your email or password?</a>
            </form>
        );
    }
}

export default LoginForm;
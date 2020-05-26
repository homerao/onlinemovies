import React, {Component} from  'react';


class LoginForm extends Component {
constructor(props){
    super(props);
    this.state = {
         titleText: "Login"
    }
}
    render(){
        return (
            <form  className="form">
            <h2 className="sr-only">{this.state.titleText}</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline i-icon" ></i></div>


            </form>
        );
    }
}

export default LoginForm;
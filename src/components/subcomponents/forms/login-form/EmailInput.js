import React , {Component} from 'react'


class Input extends Component {
    

    render(){
        return(
            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="E-mail" maxlength="65" minlength="15" required="true" /></div>
        );
    }
}

export default Input;
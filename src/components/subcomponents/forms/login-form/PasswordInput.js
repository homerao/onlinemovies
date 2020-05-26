import React , {Component} from 'react'


class Input extends Component {
    

    render(){
        return(
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" maxlength="12" minlength="4" required="true" /></div>
        );
    }
}

export default Input;
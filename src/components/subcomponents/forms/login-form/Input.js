import React , {Component} from 'react'


class Input extends Component {
    constructor(props){
        super(props);
        this.state ={
            input_type: props.input_type,
            input_name : props.input_name,
            placeholder : props.placeholder,
            maxlength : props.maxlength,
            minlength : props.minlength,
            required : props.required
        }
    }

    render(){
        return(
            <div className="form-group"><input className="form-control" type={this.state.input_type} name={this.state.input_name} placeholder={this.state.placeholder} maxlength={this.state.maxlength} minlength={this.state.minlength} required={this.state.required} /></div>
        );
    }
}

export default Input;
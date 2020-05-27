import React, {Component} from  'react';
import {NavLink} from 'react-router-dom';



class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form_title:'Formulário de Login',
            email:'',
            email_placeholder: 'E-mail',
            password_placeholder:'Password' ,
            password: ''
        }
        // registrando os eventos nos componentes
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // funções que seram registradas
    handleSubmit(event){
    alert('Evento' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
      this.setState ( {
          [name]: value
      });
      
    }
// renderização do componente
    render(){
        return (
            <form  className="form"  onSubmit={this.handleSubmit}>
            <h2 className="sr-only">{this.state.form_title}</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline i-icon" ></i></div>
            <div className="form-group"><input onChange={this.handleChange} className="form-control" type="email"  value={this.props.email} name="email" placeholder={this.state.email_placeholder} maxlength="65" minlength="15" required="true" /></div>
            <div className="form-group"><input onChange={this.handleChange} className="form-control" type="password" value={this.props.password} name="password" placeholder={this.state.password_placeholder} maxlength="12" minlength="4" required="true" /></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Entrar</button></div>
            <NavLink to="/" className="forgot">Esqueceu seu E-mail ou senha?</NavLink>
            </form>
        );
    }
}

export default LoginForm;
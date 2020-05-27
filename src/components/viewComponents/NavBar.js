import React, {Component} from 'react';
import {NavbarBrand} from 'reactstrap'
import {Link} from    'react-router-dom'
import logo from '../../resources/imgs/favicon.ico'
import {NavLink} from 'react-router-dom'



class NavBar extends Component {
  state = {
    isLoggedIn : false,
    isAdmin: false
  }
    render(props){ 
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container-fluid"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar13">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar13"> <NavLink className="navbar-brand d-none d-md-block" to="/">
          <NavbarBrand width="64px" height="64px" ><img src={logo}  width="64px" height="64px" alt=""   ></img></NavbarBrand>
          <b>MOVIES</b>
        </NavLink>
                <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Filmes
        </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/">Ação</Link>
                    <Link className="dropdown-item" to="/">Suspense</Link>
                    <Link className="dropdown-item" to="/">Comédia</Link>
                    <Link className="dropdown-item" to="/">Terror</Link>
                    <Link className="dropdown-item" to="/">Documentários</Link>
                    <Link className="dropdown-item" to="/">Romance</Link>
                    <Link className="dropdown-item" to="/">Policial</Link>
                    <Link className="dropdown-item" to="/login">Login</Link>
                  </div>
                </li>
                  <li className="nav-item"> <a className="nav-link" href="/">Assinatura</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/">Sobre</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/login">Acessar <i className="fa d-inline  fas fa-key"></i></a> </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item"> <a className="nav-link" href="/">
                      <i className="fa fa-twitter fa-fw"></i>
                    </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/">
                      <i className="fa fa-facebook fa-fw"></i>
                    </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/">
                      <i className="fa fa-slack fa-fw"></i>
                    </a> </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}
}

export default NavBar;
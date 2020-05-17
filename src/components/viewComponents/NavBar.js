import React, {Component} from 'react';

class NavBar extends Component {
    render(){ 
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar13">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar13"> <a className="navbar-brand d-none d-md-block" href="#" >
                  <i className="fa d-inline fa-lg fa-stop-circle-o"></i>
                  <b> BRAND</b>
                </a>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item" > <a className="nav-link" href="#">Filmes</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Assinatura</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Sobre</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Acessar <i className="fa d-inline  fas fa-key"></i></a> </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item"> <a className="nav-link" href="#">
                      <i className="fa fa-twitter fa-fw"></i>
                    </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">
                      <i className="fa fa-facebook fa-fw"></i>
                    </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">
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
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
  
    render(){
        return(
           
    
        <footer>
          <div className="footer-clean"></div>
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-4 item">
                        <h3>Serviços</h3>
                        <ul>
                            <li><Link to="/">Streaming</Link></li>
                            <li><Link to="/">Pay to Watch</Link></li>
                            <li><Link to="/">Production</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/">Empresa</Link></li>
                            <li><Link to="/">Equipe</Link></li>
                            <li><Link to="/">Valores</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4 item">
                        <h3>Carreira</h3>
                        <ul>
                            <li><Link to="/">Job Vagas</Link></li>
                            <li><Link to="/">Experiência profissional</Link></li>
                            <li><Link to="/">Benefícios</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 item social"><a href="/"><i class="icon ion-social-facebook" ></i></a>
                    <a href="/"><i className="icon ion-social-twitter" ></i></a>
                    <Link to="/"><i className="icon ion-social-snapchat" ></i></Link>
                        <Link
                            to="/"><i className="icon ion-social-instagram" ></i></Link>
                            <p className="copyright">Online Movies © 2020</p>
                    </div>
                </div>
            </div>
   
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>

            </footer>
        );
    }

}

export default Footer;
import React ,{ Component} from 'react';
import movie1 from '../../resources/imgs/movie1.jpg'
import movie2 from '../../resources/imgs/movie2.jpg'
import movie3 from '../../resources/imgs/movie3.jpg'
import hobbit from '../../resources/imgs/hobbit.jpg'
import frozen from '../../resources/imgs/frozen.jpg'
import guerraInfinita from '../../resources/imgs/guerrainfinita.jpg'
import doisirmaos from '../../resources/imgs/doisirmaos.jpg'
import vikings from '../../resources/imgs/vikings.jpg'
import arremesofinal from '../../resources/imgs/arremesofinal.jpg'
import  '../../resources/css/styles.css'
import logo  from '../../resources/imgs/favicon.ico'
import {NavLink} from   'react-router-dom'
import {Link} from 'react-router-dom'



class Content extends Component {
  constructor(props){
         super(props)
    this.state = {
        imgWidth : '256px',
        imgHeight: '512px'
    }
  }
  render() {
      return (
         <div>
        <div className="py-5">
        <div className="container">
          <div className="row w-100 d-flex flow flex-grow-1">
            <div className="text-center mx-auto col-lg-8 col-10">
              <h1 className="mb-3">Lançamentos</h1>
              <div id="carousel1" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                  <div className="carousel-item active"> <img className="d-block w-100 img-fluid mx-auto" src={movie1} alt="" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src={movie2} alt="" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src={movie3} alt="" /></div>
                </div>
                <ol className="carousel-indicators">
                  <li data-target="#carousel1" data-slide-to="0" className="active"> </li>
                  <li data-target="#carousel1" data-slide-to="1"> </li>
                  <li data-target="#carousel1" data-slide-to="2"> </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* style="{{background-image: url(https://static.pingendo.com/cover-bubble-dark.svg)}, background-position: right bottom,  background-size: cover, background-repeat: repeat, background-attachment: fixed}"  */}
      <div className="py-5 div"   >
     <div class="container">
      <div class="row">
        <div class="ml-auto p-3 col-md-2 bg-white"> <img class="img-fluid d-block rounded-circle" src={logo} alt="" /> </div>
        <div class="p-3 col-md-7 mr-auto bg-white text-dark">
          <div class="blockquote mb-0">
            <p>"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."</p>
            <div class="blockquote-footer"> <b>J. W. Goethe</b>, CEO at Werther Inc.</div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
      <div class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={hobbit} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center" ><Link>Hobbit </Link> </h3>
          <h2 class="my-3 text-center"><b></b> </h2>
          <p className="text-justify" >Após ser expulso da montanha de Erebor, o dragão Smaug ataca com fúria a cidade dos homens que fica próxima ao local. Após muita destru...</p>
        </div>
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={frozen} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center"><Link>Frozen</Link></h3>
          <h2 class="my-3 text-center">  </h2>
          <p className="text-justify">De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às ...</p>
        </div>
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={guerraInfinita} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center"><Link>Guerra infinita</Link></h3>
          <h2 class="my-3 text-center">  </h2>
          <p className="text-justify">Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar ...</p>
        </div>
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={doisirmaos} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center"><Link>Dois irmãos</Link></h3>
          <h2 class="my-3 text-center">  </h2>
          <p className="text-justify">Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu ...</p>
        </div>
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={vikings} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center"><Link>Vikings</Link></h3>
          <h2 class="my-3 text-center">  </h2>
          <p className="text-justify">So absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke.</p>
        </div>
        <div class="col-md-4 col-6 p-3"><NavLink to="/"> <img class="img-fluid d-block mx-auto" src={arremesofinal} alt="" width={this.state.imgWidth}  height={this.state.imgHeight} /></NavLink>
          <h3 class="text-center"><Link>Arremesso Final</Link></h3>
          <h2 class="my-3 text-center">  </h2>
          <p className="text-justify">Esse relato definitivo sobre a carreira de Michael Jordan e o time do Chicago Bulls nos anos 90 traz imagens inéditas da temporada de 1997–1998.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
      
          
      );
  }

}

export default Content;
import React ,{ Component} from 'react';



class Content extends Component {
  render() {
      return (
         <div>
        <div className="py-5">
        <div className="container">
          <div className="row w-100 d-flex flow flex-grow-1">
            <div className="text-center mx-auto col-lg-8 col-10">
              <h1 className="mb-3">Lançamentos</h1>
              <div id="carousel1" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner">
                  <div className="carousel-item active"> <img className="d-block w-100 img-fluid mx-auto" src="https://static.pingendo.com/cover-moon.svg" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src="https://static.pingendo.com/cover-bubble-light.svg" /> </div>
                  <div className="carousel-item"> <img className="d-block w-100" src="https://static.pingendo.com/cover-bubble-dark.svg" /> </div>
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
      <div className="py-5"  style={{
          backgroundimage : 'url(https://static.pingendo.com/cover-bubble-dark.svg)',
          backgroundposition: 'right bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed'
          
                                    }} >
        <div className="container">
          <div className="row">

            <div className="ml-auto p-3 col-md-2 bg-white"> 
            <img className="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-1.svg" ></img> 
            </div>

            <div className="p-3 col-md-7 mr-auto bg-white text-dark">
              <div className="blockquote mb-0">
                <p>"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."</p>
                <div className="blockquote-footer"> <b>J. W. Goethe</b>, CEO at Werther Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-3">
        <div className="container">
          <div className="row">

            <div className="col-md-4 col-6 p-3"> <img className="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg" />
              <h2 className="my-3"><b>One&nbsp;</b> </h2>
              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>

            <div className="col-md-4 col-6 p-3"> <img className="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg" />
              <h2 className="my-3"> <b>Two</b> </h2>
              <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
            </div>

            <div className="col-md-4 col-6 p-3"> <img className="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg" />
              <h2 className="my-3"> <b>Three</b> </h2>
              <p>So absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke.</p>
            </div>

          </div>
        </div>
      </div>
      </div>
      
          
      );
  }

}

export default Content;
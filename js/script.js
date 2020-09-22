$(window).ready(function(){
    if($(window).width() > 900) {
        let modalWithSlider = `<div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class=" modal-lg modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
    
              <div id="carouselExample" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExample" data-slide-to="0"></li>
                  <li data-target="#carouselExample" data-slide-to="1"></li>
                  <li data-target="#carouselExample" data-slide-to="2"></li>
                  <li data-target="#carouselExample" data-slide-to="3"></li>
                  <li data-target="#carouselExample" data-slide-to="4"></li>
                  <li data-target="#carouselExample" data-slide-to="5"></li>
                  <li data-target="#carouselExample" data-slide-to="6"></li>
                  <li data-target="#carouselExample" data-slide-to="7"></li>
                  <li data-target="#carouselExample" data-slide-to="8"></li>
                  <li data-target="#carouselExample" data-slide-to="9"></li>
                  <li data-target="#carouselExample" data-slide-to="10"></li>
                  <li data-target="#carouselExample" data-slide-to="11"></li>
                  <li data-target="#carouselExample" data-slide-to="12"></li>
                  <li data-target="#carouselExample" data-slide-to="13"></li>
                  <li data-target="#carouselExample" data-slide-to="14"></li>
                  <li data-target="#carouselExample" data-slide-to="15"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a1.jpg" alt="First slide" >
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a2.jpg" alt="Second slide" >
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a3.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a4.jpg" alt="Fourth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a5.jpg" alt="Fifth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a6.jpg" alt="Sixth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a7.jpg" alt="Seventh slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a8.jpg" alt="Eigth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a9.jpg" alt="Nineth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a10.jpg" alt="Tenth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a11.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a12.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a13.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a14.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a15.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a16.jpg">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>`
            $('script').before($(modalWithSlider))
    }
    if($(window).width() <= 900){
        $('.modal').detach()
    } 
});

$(window).resize(function(){
    if($(window).width() > 900) {
        let modalWithSlider = `<div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class=" modal-lg modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
    
              <div id="carouselExample" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExample" data-slide-to="0"></li>
                  <li data-target="#carouselExample" data-slide-to="1"></li>
                  <li data-target="#carouselExample" data-slide-to="2"></li>
                  <li data-target="#carouselExample" data-slide-to="3"></li>
                  <li data-target="#carouselExample" data-slide-to="4"></li>
                  <li data-target="#carouselExample" data-slide-to="5"></li>
                  <li data-target="#carouselExample" data-slide-to="6"></li>
                  <li data-target="#carouselExample" data-slide-to="7"></li>
                  <li data-target="#carouselExample" data-slide-to="8"></li>
                  <li data-target="#carouselExample" data-slide-to="9"></li>
                  <li data-target="#carouselExample" data-slide-to="10"></li>
                  <li data-target="#carouselExample" data-slide-to="11"></li>
                  <li data-target="#carouselExample" data-slide-to="12"></li>
                  <li data-target="#carouselExample" data-slide-to="13"></li>
                  <li data-target="#carouselExample" data-slide-to="14"></li>
                  <li data-target="#carouselExample" data-slide-to="15"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a1.jpg" alt="First slide" >
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a2.jpg" alt="Second slide" >
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a3.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a4.jpg" alt="Fourth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a5.jpg" alt="Fifth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a6.jpg" alt="Sixth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a7.jpg" alt="Seventh slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a8.jpg" alt="Eigth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a9.jpg" alt="Nineth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a10.jpg" alt="Tenth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a11.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a12.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a13.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a14.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a15.jpg">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a16.jpg">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>`
        $('script').before($(modalWithSlider))
    }   
    if($(window).width() <= 900){
        $('.modal').detach()
    } 
 
    });


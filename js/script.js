$(window).ready(function(){

// Show or hide Modal Slider
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
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a11.jpg" alt="Eleventh slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a12.jpg" alt="Twelveth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a13.jpg" alt="Thirteenth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a14.jpg" alt="Fourteenth slide">
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
        $('#ModalCenter').detach()
    }

// Show and hide logo if navbar is not collapsed
let btnNavToggler = document.querySelector('.navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');
btnNavToggler.addEventListener('click', () => {
    let logo = document.querySelector('.logo');
    setTimeout(() => {
      if(btnNavToggler.getAttribute('aria-expanded') == 'true'){
        btnNavToggler.style.border = 'none';
        logo.style.display = 'none';
      } else {
        navCollapse.classList.remove('collapsing');
        navCollapse.classList.add('collapse');
        btnNavToggler.style.border = '1px solid rgba(0,0,0,0.1)';
        logo.style.display = 'block';
      }
    }, 20)
});

// Init Call button
let btnCall = document.querySelector('.btn-call');

// Add click animation on Call Button
// btnCall.addEventListener('click', () => {
//   btnCall.classList.add('clicked');
//     setTimeout(() => {
//       btnCall.classList.remove('clicked');
//       }, 150);
//     });

// Add shuffle animation on Call Button
window.addEventListener('load', () => {
  setTimeout(() => {
    animFromBottom(btnCall);
    setTimeout(() => {
      animShuffle(btnCall);
      btnCall.style.bottom = '40px';
    }, 300);
  }, 300);
});

// Shuffle Call Button time after time
let shuffleInterval = setInterval(() => {
  animShuffle(btnCall);
}, 3000);

// Show or hide navbar after page is loaded
window.addEventListener('load', function() {
  let firstBlock = document.querySelector('.first');
  let firstBlockBottom = firstBlock.getBoundingClientRect().bottom;
  let headNavBar = document.querySelector('.navbar');
  let logo = document.querySelector('.logo');
  let navLinkText = document.querySelectorAll('.nav-link-text');
  if(firstBlockBottom < 525)
  {
    logo.style.filter = 'invert(0)';
    headNavBar.classList.add('bgIn');
    setTimeout(() => {
      headNavBar.style.backgroundColor = '#f8f9fa';
    }, 250)
    btnNavToggler.style.filter = 'invert(0)';
    navLinkText.forEach(item => {
      item.style.color = '#000';

    });
  } else if (firstBlockBottom > 525){
    logo.style.filter = 'invert(1)';
    btnNavToggler.style.filter = 'invert(1)';
    headNavBar.style.backgroundColor = '#f8f9fa00';
    navLinkText.forEach(item => {
      item.style.color = '#fff';
  });
}
});

// Invert, scroll and hide head navbar while scrolling
window.addEventListener('scroll', function() {
      let firstBlock = document.querySelector('.first');
      let firstBlockBottom = firstBlock.getBoundingClientRect().bottom;
      let thirdBlock = document.querySelector('.second');
      let thirdBlockTop = thirdBlock.getBoundingClientRect().top;
      let headNavBar = document.querySelector('.navbar');
      let logo = document.querySelector('.logo');
      let navLinkText = document.querySelectorAll('.nav-link-text');
      console.log(firstBlockBottom);

      if(firstBlockBottom < 725)
      {
        logo.style.filter = 'invert(0)';
        btnNavToggler.style.filter = 'invert(0)';
        headNavBar.classList.add('bgIn');
        headNavBar.style.backgroundColor = '#f8f9fa';
        navLinkText.forEach(item => {
          item.style.color = '#000';
          item.addEventListener('mouseover', () => {item.style.color = '#ff5e00'});
          item.addEventListener('mouseout', () => {item.style.color = '#000'});
        });

      } 
      if (firstBlockBottom > 800){
        logo.style.filter = 'invert(1)';
        btnNavToggler.style.filter = 'invert(1)';
        headNavBar.classList.remove('bgIn');
        headNavBar.style.backgroundColor = '#f8f9fa00';
        navLinkText.forEach(item => {
          item.style.color = '#fff';
          item.addEventListener('mouseover', () => {item.style.color = '#ff5e00'});
          item.addEventListener('mouseout', () => {item.style.color = '#fff'});
        });
      }
      if(thirdBlockTop < 150){
        headNavBar.style.opacity = 0;
      } 
      if (thirdBlockTop > 250){
        headNavBar.style.opacity = 1;
      }
});

// Hide portfolio galery and add slider galery
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
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a11.jpg" alt="Eleventh slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a12.jpg" alt="Twelveth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a13.jpg" alt="Thirteenth slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 img-portfolio" src="img/portfolio/a14.jpg" alt="Fourteenth slide">
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
        $('#ModalCenter').detach()
    } 
 
    });



// Function to make PopUpFromBottom animation
function animFromBottom(el){
    el.style.display = 'block';
    el.classList.add('animShow');
    el.style.bottom = '40px';
    setTimeout(() => {
      el.classList.remove('animShow');
    }, 300)
}

// Function to make HideToBottom animation
function animToBottom(el){
  setTimeout(() => {
    el.classList.add('animHide');
    setTimeout(() => {
      el.classList.remove('animHide');
      el.style.bottom = '-150px';
      el.style.display = 'none';
    }, 300);
  }, 250)
}

// Function to make shuffle animation
function animShuffle(el){
    el.classList.add('shuffled');
      setTimeout(() => {
        el.classList.remove('shuffled');
      }, 1100);
}


// Sending email without reloading page (AJAX)
let btnSend = document.querySelector('.btn-submit');

btnSend.addEventListener('click', e => {
  sendEmail();
  e.preventDefault();
});

// Sending mail function
function sendEmail(){
  // Getting all of inputs from contact form
  let name = document.querySelector('input[name="name"]').value;
  let subject = document.querySelector('input[name="subject"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  //Checking if inputs aren't empty
  if(name == '' || subject == '' && email == '' || message == '')
  {
    //If at least one form is empty - show warning message
    let msg = "Prosimy wypełnić puste miejsca";

    document.querySelector('.contact-alert-message').innerHTML = 
    `<div class="alert alert-danger">${msg}</div>`;
  } 
  else
  {
    //If aren't empty - show success message
    let msg = "Wiadomość została wysłana";

    document.querySelector('.contact-alert-message').innerHTML = `<div class="alert alert-success">${msg}</div>`;

    //Creating new FormData object
    let formdata = new FormData();
    formdata.append('email', email);
    formdata.append('phone', phone);
    formdata.append('name', name);
    formdata.append('subject', subject);
    formdata.append('message', message);
    
    //Create XMLHttpRequest object

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
      if(this.status == 200){
        let msg = "Wiadomość została wysłana";

        document.querySelector('.contact-alert-message').innerHTML = `<div class="alert alert-success">${msg}</div>`;
      }
    }

    xhr.open('POST', '../sendEmail.php', true);

    xhr.send(formdata);
  }
}


// Initialize Contact Modal WIndow and Close Button
let contactModal = document.querySelector('#contactModal');
let btnClose = document.querySelector('.close');


// Show and hide Call Button if Contact Modal Form is showing or isn't.
btnCall.addEventListener('click', () => {
  clearInterval(shuffleInterval);
  if(btnCall.classList.contains('shuffled')){
    btnCall.classList.remove('shuffled');
    setTimeout(() => {
      if(contactModal.style.display == 'block'){
        animToBottom(btnCall);
      }
    }, 200)
  } else {
    setTimeout(() => {
      if(contactModal.style.display == 'block'){
        animToBottom(btnCall);
      }
    }, 200)
  }
  
});

//Show Call Button after clicking on Contact Modal Close Button
btnClose.addEventListener('click', () => {
  shuffleInterval = setInterval(() => {
    animShuffle(btnCall);
  }, 3000);
  setTimeout(() => {
    if(contactModal.style.display == 'none'){
      animFromBottom(btnCall);
    }
  }, 300);
})

//Show Call Button after clicking somewhere but not on Contact Modal
window.addEventListener('click', () => {
  setTimeout(() => {
    if(contactModal.style.display == 'none'){
      shuffleInterval = setInterval(() => {
        animShuffle(btnCall);
      }, 3000);
      animFromBottom(btnCall);
    }
  }, 300);
});

// Befor-After Slider
$.fn.BeerSlider = function( options ) {
  options = options || {};
  return this.each( function () {
    new BeerSlider( this, options );
  });
};
$( ".beer-slider" ).each( function( index, el ) {
  $( el ).BeerSlider( {start: $( el ).data( "start" ) } )
});


  });
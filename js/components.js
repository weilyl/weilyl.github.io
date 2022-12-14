class Header extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a class="navbar-brand" href="#"><span class="text-primary">Weily</span> Lang</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link smoothscroll" href="#about-section">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link smoothscroll" href="#portfolio-section">Programming</a>
            </li>
            <!--<li class="nav-item">
              <a class="nav-link smoothscroll" href="#research-section">Research</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link smoothscroll" href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>
      </nav>`
    }
}

customElements.define("b-header", Header);
/*
class Project extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = 
    <div class="row mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="images/sq_img_2.jpg" alt="Image" class="img-fluid">
          </div>
          <div class="col-lg-5 h-100 jm-sticky-top ml-auto">
            <h3>On The Hook</h3>
            <p class="mb-4">A full-stack application for crochet hobbyists to keep track of patterns.</p>
            <p class="mb-4"><a href="#" class="readmore">Visit website</a></p>
            <div class="testimonial bg-white h-100">
              <blockquote class="mb-3">
                <p>&ldquo;Far far away, behind the word mountains, <strong>far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</strong> right at the coast of the Semantics, a large language ocean.&rdquo;</p>
              </blockquote>
              <div class="d-flex align-items-center vcard">
                <figure class="mb-0 mr-3">
                  <img src="images/person_3.jpg" alt="Image" class="img-fluid ounded-circle">
                </figure>
                <div class="vcard-text">
                  <span class="d-block">Jacob Spencer</span>
                  <span class="position">Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        */
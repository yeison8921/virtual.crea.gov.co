<?php get_header(); ?>
<input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
<section id="carousel">
  <div class="row">
    <div id="carousel-index" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active slide-index" id="slide1"></div>
        <div class="item slide-index" id="slide2"></div>
        <div class="item slide-index" id="slide3"></div>
        <div class="item slide-index" id="slide4"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="position: absolute; top: 5%;">
          <div class="col-lg-offset-2 col-lg-8 col-md-12 col-sm-12 hidden-xs" id="div-logo-index">
            <div style="float: left;">
             <img src="<?php bloginfo('template_url'); ?>/index/Logo_crea.png" style="height: 100px;">
           </div>
         </div>
         <div class='col-lg-offset-5 col-lg-2 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4 col-xs-12 text-center' id="div-titulo-index">
          <h1>Aula Virtual</h1>
          <hr>
          <h2>Áreas artísticas</h2>
        </div>
        <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center' id="div-areas-index">
          <div>
            <a href="<?php bloginfo('url'); ?>/introduccion-aula-musica">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_musica.png" id="img-musica">
              <span>Música<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="<?php bloginfo('url'); ?>/introduccion-aula-artes-plasticas">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_plasticas.png" id="img-plasticas">
              <span>Artes<br>plásticas</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_literatura.png" id="img-literatura">
              <span>Creación<br>literaria</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_danza.png" id="img-danza">
              <span>Danza<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_dramatico.png" id="img-dramatico">
              <span>Arte<br>dramático</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_audiovisuales.png" id="img-audiovisuales">
              <span>Audiovisuales<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_electronicas.png" id="img-electronicas">
              <span>Artes<br>electrónicas</span>
            </a>
          </div>
        </div>  
      </div>
    </div>
    <a class="left carousel-control" href="#carousel-index" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-index" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</section>
<?php get_footer(); ?>
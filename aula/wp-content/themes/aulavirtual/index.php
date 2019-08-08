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
        <div class="col-lg-12" style="position: absolute; top: 5%;">
          <div class="col-lg-offset-2 col-lg-8 col-md-12" id="div-logo-index">
            <div style="float: left;">
             <img src="<?php bloginfo('template_url'); ?>/index/Logo_crea.png" style="height: 100px;">
           </div>
         </div>
         <div class='col-lg-offset-5 col-lg-2 col-md-offset-4 col-md-4 text-center' id="div-titulo-index">
          <h1>Aula Virtual</h1>
          <hr>
          <h2>Áreas artísticas</h2>
        </div>
        <div class='col-lg-12 col-md-12 text-center' id="div-areas-index">
          <div>
            <a href="<?php bloginfo('url'); ?>/introduccion-aula-musica">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_musica.png" id="img-musica" width="120px">
              <span>Música<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="<?php bloginfo('url'); ?>/introduccion-aula-artes-plasticas">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_plasticas.png" id="img-plasticas" width="120px">
              <span>Artes<br>plásticas</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_literatura.png" id="img-literatura" width="120px">
              <span>Creación<br>literaria</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_danza.png" id="img-danza" width="120px">
              <span>Danza<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_dramatico.png" id="img-dramatico" width="120px">
              <span>Arte<br>dramático</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_audiovisuales.png" id="img-audiovisuales" width="120px">
              <span>Audiovisuales<br>&nbsp</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/index/normal_electronicas.png" id="img-electronicas" width="120px">
              <span>Artes<br>electrónicas</span>
            </a>
          </div>
        </div>  
      </div>
    </div>
  </div>
</div>
</section>
<?php get_footer(); ?>
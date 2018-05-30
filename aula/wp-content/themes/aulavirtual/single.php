<?php get_header(); ?>
      <!--Inicio Contenido -->
      <div class="container">
        <div class="row">
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <div class="col-12 col-md-9 my-5">
            <?php if ( has_post_thumbnail() ) {
            the_post_thumbnail('post-thumbnails', array('class' => 'img-responsive'));
            }?>
            <h2 class="my-3"><?php the_title(); ?></h2>
            <p class="lead"><?php echo get_the_date(); ?></p>
            <div class="text-justify">
              <?php the_content(); ?>
            </div>
          </div>
          <?php endwhile; endif; ?>
      </div>
    </div>
      <!--fin contenido -->

<?php get_footer(); ?>
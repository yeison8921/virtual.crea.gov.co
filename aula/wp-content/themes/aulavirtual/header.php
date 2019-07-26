<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Aula Virtual CREA</title>
  <?php wp_head(); ?>
</head>
<body> <!-- <?php body_class() ?> -->
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="<?php echo home_url() ?>">Aula Virtual</a>
      </div>
      <?php wp_nav_menu(array(
        'theme_location' => 'principal',
        'container' => 'div',
        'container_class' => 'navbar-collapse collapse',
        'container_id' => 'navbar',
        'items_wrap' => '<ul class="nav navbar-nav navbar-right">%3$s</ul>'
      )); ?>
    </div>
  </nav>


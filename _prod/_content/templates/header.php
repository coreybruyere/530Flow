<header class="site-header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
  <div class="container">
    <a class="branding" href="<?php echo esc_url(home_url('/')); ?>">
      <svg class="branding__logo" aria-hidden="true">
        <title><?php bloginfo('name'); ?></title>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-530_ml_logo"></use>
      </svg>

      <h1 class="branding__wordmark">Site Name</h1>
    </a>
    <nav class="site-nav" role="navigation">
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
        endif;
      ?>
    </nav>
  </div>
</header>


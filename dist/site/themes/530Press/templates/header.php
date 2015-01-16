<header class="site-header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
  <div class="container">
    <div itemscope itemtype="http://schema.org/Organization">
      <a itemprop="url" class="branding" href="<?php echo esc_url(home_url('/')); ?>">
        <svg itemprop="logo" class="branding__logo" aria-hidden="true">
          <title><?php bloginfo('name'); ?></title>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-530_ml_logo"></use>
        </svg>
        <h1 class="branding__wordmark">Site Name</h1>
      </a>
    </div>
    <nav class="nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array(
            'theme_location'  => 'primary_navigation',
            'walker'          => new Roots_Nav_Walker(),
            'menu_class'      => 'list-ui',
            'items_wrap'      => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'
          ));
        endif;
      ?>
    </nav>
  </div>
</header>


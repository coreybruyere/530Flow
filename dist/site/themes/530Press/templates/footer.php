
<footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
  <div class="container">
    <a class="branding" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
    <nav class="nav--footer" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
      <!-- <?php dynamic_sidebar('sidebar-footer'); ?> -->
      <?php
        if (has_nav_menu('secondary_navigation')) :
          wp_nav_menu(array(
            'theme_location'  => 'secondary_navigation',
            'walker'          => new Roots_Nav_Walker(),
            'menu_class'      => 'list-ui',
            'items_wrap'      => '<ul id="%1$s" class="%2$s" role="menubar">%3$s</ul>'
          ));
        endif;
      ?>
    </nav>
    <small class="site-credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></small>
  </div>
</footer>

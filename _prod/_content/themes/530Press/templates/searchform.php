<form role="search" method="get" class="search-form field" action="<?php echo esc_url(home_url('/')); ?>">
  <label><?php _e('Search for:', 'roots'); ?></label>
  <div class="field__input-group">
    <input type="search" value="<?php echo get_search_query(); ?>" name="s" class="search-form__input" placeholder="<?php _e('Search', 'roots'); ?> <?php bloginfo('name'); ?>">
    <button type="submit" class="search-form__btn btn"><?php _e('Search', 'roots'); ?></button>
  </div>
</form>

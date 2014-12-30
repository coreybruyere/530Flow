<?php
/**
 * Cleaner walker for wp_nav_menu()
 *
 * Walker_Nav_Menu (WordPress default) example output:
 *   <li id="menu-item-8" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8"><a href="/">Home</a></li>
 *   <li id="menu-item-9" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9"><a href="/sample-page/">Sample Page</a></l
 *
 * Roots_Nav_Walker example output:
 *   <li class="menu-home"><a href="/">Home</a></li>
 *   <li class="menu-sample-page"><a href="/sample-page/">Sample Page</a></li>
 */

/**
 * Class Name: wp_bootstrap_navwalker
 * GitHub URI: https://github.com/twittem/wp-bootstrap-navwalker
 * Description: A custom WordPress nav walker class to implement the Bootstrap 3 navigation style in a custom theme using the WordPress built in menu manager.
 * Version: 2.0.4
 * Author: Edward McIntyre - @twittem
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

class Clean_Walker_Nav extends Walker_Nav_Menu {

  /**
   * @see Walker::start_lvl()
   * @since 3.0.0
   *
   * @param string $output Passed by reference. Used to append additional content.
   * @param int $depth Depth of page. Used for padding.
   */
  public function start_lvl( &$output, $depth = 0, $args = array() ) {
    $indent = str_repeat( "\t", $depth );
    $output .= "\n$indent<ul role=\"menu\" class=\" dropdown-menu\">\n";
  }

  /**
   * @see Walker::start_el()
   * @since 3.0.0
   *
   * @param string $output Passed by reference. Used to append additional content.
   * @param object $item Menu item data object.
   * @param int $depth Depth of menu item. Used for padding.
   * @param int $current_page Menu item ID.
   * @param object $args
   */
  public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

    /**
     * Dividers, Headers or Disabled
     * =============================
     * Determine whether the item is a Divider, Header, Disabled or regular
     * menu item. To prevent errors we use the strcasecmp() function to so a
     * comparison that is not case sensitive. The strcasecmp() function returns
     * a 0 if the strings are equal.
     */
    if ( strcasecmp( $item->attr_title, 'divider' ) == 0 && $depth === 1 ) {
      $output .= $indent . '<li role="presentation" class="divider">';
    } else if ( strcasecmp( $item->title, 'divider') == 0 && $depth === 1 ) {
      $output .= $indent . '<li role="presentation" class="divider">';
    } else if ( strcasecmp( $item->attr_title, 'dropdown-header') == 0 && $depth === 1 ) {
      $output .= $indent . '<li role="presentation" class="dropdown-header">' . esc_attr( $item->title );
    } else if ( strcasecmp($item->attr_title, 'disabled' ) == 0 ) {
      $output .= $indent . '<li role="presentation" class="disabled"><a href="#">' . esc_attr( $item->title ) . '</a>';
    } else {

      // Get classes from admin
      $classes = empty( $item->classes ) ? array() : (array) $item->classes;

      // Change class name based on location
      if ( $args->theme_location == 'header_navigation' ) {
        $classes[] = 'nav__item';
      } elseif ( $args->theme_location == 'footer_navigation' ) {
        $classes[] = 'nav--footer__item';
      }
        //     if ( in_array( 'current-menu-item', $classes ) )
        // $class_names = ' active';


      // Apply filter and append classes from admin

      $classes = preg_replace('/^((menu|page)[-_\w+]+)+/', '', $classes);
      $classes = preg_replace('/(current(-menu-|[-_]page[-_])(item|parent|ancestor))/', 'active', $classes);
      $class_names = implode(' ', apply_filters( 'nav_menu_css_class', array_unique($classes) ) );
      $class_names = preg_replace('/\s+/',' ', $class_names);
      $class_names = preg_replace('/^ /', '', $class_names);

      // array_filter($classes, 'is_element_empty');

      if ( $args->has_children )
        $class_names .= ' dropdown';

      $class_names = $class_names ? ' class="' . ( $class_names ) . '"' : '';

      // These are disabled with function down below. But here if needed
      $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
      $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

      $output .= $indent . '<li role="presentation"' . $id . $value . $class_names .'>';

      $atts = array();
      $atts['title']  = ! empty( $item->title ) ? $item->title  : '';
      $atts['target'] = ! empty( $item->target )  ? $item->target : '';
      $atts['rel']    = ! empty( $item->xfn )   ? $item->xfn  : '';

      // If item has_children add atts to a.
      if ( $args->has_children && $depth === 0 ) {
        $atts['href']         = '#';
        $atts['data-toggle']  = 'dropdown';
        $atts['class']        = 'dropdown-toggle';
        $atts['aria-haspopup']= 'true';
      } else {
        $atts['href']         = ! empty( $item->url ) ? $item->url : '';
        $atts['role']         = 'menuitem';
        // Change link class based on location
        if ( $args->theme_location == 'header_navigation' ) {
          $atts['class']      = 'nav__link';
          $atts['data-module']= $item->title;
        } else {
          $atts['class']      = 'link';
        }
      }

      $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );

      $attributes = '';
      foreach ( $atts as $attr => $value ) {
        if ( ! empty( $value ) ) {
          $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
          $attributes .= ' ' . $attr . '="' . $value . '"';
        }
      }

      $item_output = $args->before;

      // $custom_arg = esc_attr( $args->walker_li );
      // echo "<pre>"; print_r($custom_arg); echo "</pre>"; die();

      /*
       * Glyphicons
       * ===========
       * Since the the menu item is NOT a Divider or Header we check the see
       * if there is a value in the attr_title property. If the attr_title
       * property is NOT null we apply it as the class name for the glyphicon.
       */
      if ( ! empty( $item->attr_title ) )
        $item_output .= '<a'. $attributes .'><span class="glyphicon ' . esc_attr( $item->attr_title ) . '"></span>&nbsp;';
      else
        $item_output .= '<a'. $attributes .'>';

      $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
      $item_output .= ( $args->has_children && 0 === $depth ) ? ' <span class="caret"></span></a>' : '</a>';
      $item_output .= $args->after;

      $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
  }

  /**
   * Traverse elements to create list from elements.
   *
   * Display one element if the element doesn't have any children otherwise,
   * display the element and its children. Will only traverse up to the max
   * depth and no ignore elements under that depth.
   *
   * This method shouldn't be called directly, use the walk() method instead.
   *
   * @see Walker::start_el()
   * @since 2.5.0
   *
   * @param object $element Data object
   * @param array $children_elements List of elements to continue traversing.
   * @param int $max_depth Max depth to traverse.
   * @param int $depth Depth of current element.
   * @param array $args
   * @param string $output Passed by reference. Used to append additional content.
   * @return null Null on failure with no changes to parameters.
   */
  public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
        if ( ! $element )
            return;

        $id_field = $this->db_fields['id'];

        // Display this element.
        if ( is_object( $args[0] ) )
           $args[0]->has_children = ! empty( $children_elements[ $element->$id_field ] );

        parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
    }

  /**
   * Menu Fallback
   * =============
   * If this function is assigned to the wp_nav_menu's fallback_cb variable
   * and a manu has not been assigned to the theme location in the WordPress
   * menu manager the function with display nothing to a non-logged in user,
   * and will add a link to the WordPress menu manager if logged in as an admin.
   *
   * @param array $args passed from the wp_nav_menu function.
   *
   */
  public static function fallback( $args ) {
    if ( current_user_can( 'manage_options' ) ) {

      extract( $args );

      $fb_output = null;

      if ( $container ) {
        $fb_output = '<' . $container;

        if ( $container_id )
          $fb_output .= ' id="' . $container_id . '"';

        if ( $container_class )
          $fb_output .= ' class="' . $container_class . '"';

        $fb_output .= '>';
      }

      $fb_output .= '<ul';

      if ( $menu_id )
        $fb_output .= ' id="' . $menu_id . '"';

      if ( $menu_class )
        $fb_output .= ' class="' . $menu_class . '"';

      $fb_output .= '>';
      $fb_output .= '<li><a href="' . admin_url( 'nav-menus.php' ) . '">Add a menu</a></li>';
      $fb_output .= '</ul>';

      if ( $container )
        $fb_output .= '</' . $container . '>';

      echo $fb_output;
    }
  }
}

// Remove extra ID's and classes from menu items
// function roots_nav_menu_css_class($classes, $item) {
//   // $slug = sanitize_title($item->title);
//   $classes = preg_replace('/(current(-menu-|[-_]page[-_])(item|parent|ancestor))/', 'active', $classes);
//   $classes = preg_replace('/^((menu|page)[-_\w+]+)+/', '', $classes);

//   $classes = array_unique($classes);

//   return array_filter($classes, 'is_element_empty');
// }
// add_filter('nav_menu_css_class', 'roots_nav_menu_css_class', 10, 2);
add_filter('nav_menu_item_id', '__return_null');



/**
 * Clean up wp_nav_menu_args
 *
 * Remove the container
 * Use Roots_Nav_Walker() by default
 */

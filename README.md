# 530's Starter Workflow : HTML, SCSS, WP


## Introduction

530's modified version of Skyline helps you create a design system for your website.  It encourages a well thought-out CSS architecture, and enables you to develop a reusable and maintainable codebase.

This starter kit includes the style files you will use on your site. Each SCSS partial is self-documented and includes markup examples in the comments. Whenever a new partial is added make sure to use the same documentation style to keep the project consistent. The kit also contains HTML files as examples to illustrate how you should write out your markup.

530's Skyline is a minimal scaffolding starter kit that imposes little to no visual style.  It contains many layout and structural helpers, utilities, and basic element and module styles that you will build upon. This kit helps to streamline frontend processes with various grunt tasks. It's a static frontend-first workflow that allows for developers to easily piece together 'pieces' or 'modules' in a static development environment, which means quicker development and/or prototyping. It also allows for on the fly frontend changes or development in a non-static environment - in our case Wordpress. Frontend development (CSS & JS) should only take place within the `_dev` directory. All assets are compiled and concatenated into `_prod` while working in the `_dev` directory.

Use the `index.html` file as a starting point for static development then prefix the rest of your pages with 'page-'.  *example:* `page-about.html`

You can reference the example files or documentation to clarify proper BEM/SCSS, JS hooks, and Grid/Layout usage.

#### Some buzz-wordy things included in this project

* Static HTML5 files
* [OOCSS SCSS files in BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* jQuery
* Grunt.js
* [Roots.io](http://roots.io/docs/) Wordpress Theme
* [Schema.org markup in WP for better SEO](http://builtvisible.com/micro-data-schema-org-guide-generating-rich-snippets/)


## Guidelines

#### CSS / SCSS
This kit uses the [BEM](http://bem.info/method/) syntax and [OOCSS](http://oocss.org/) patterns. Following these as closely as possible, along with good documentation, will lead to an organzied, and maintainable codebase.

The `grunt` and `grunt dev` commands compile, prefix, minify, and copy css into both the static development directory and the cms directory.

This kit provides an `em` and `rem` function. The `em` function should be used for font-size while the `rem` function is used everywhere else a value and unit is needed.  Any unit passed through the `rem` function is relative to the default 16px value defined in the html block. This value shouldn't be tampered with.  Any global font-size changes can be made within the `_body.scss` partial. Examples and documentation for these functions along with the rest of the projects mixins can be found in the HTML file located in `lib/scss/sass-docs/`

**Class names should communicate _useful_ information to _developers_.** It’s helpful to understand what a specific class name is going to do when you read a DOM snippet, especially in multi-developer teams where front-enders won’t be the only people working with HTML components. If you don’t need to add presentation and behaviour to your web documents, then you probably don’t need classes in your HTML.

**Class names impart little or no useful semantic information to machines** or human visitors unless it is part of a small set of agreed upon (and machine readable) names – Microformats.


###### General Styling

* **DO NOT** using ID's.  Use classes instead
* **DO NOT** over-qualify selectors.  Keep specificity number as low as possible
* **DO NOT** (with the exception of pseudo/hover states, module modifiers, and child classes)
* Use provided `rem` function for everything except font-size
* Use provided `em` function for type font-size
* All module class names should use the double underscore and double dash BEM syntax where appropriate
* Use one discrete, comma separated selector per line in multi-selector rulesets
* Order of CSS properties: Positioning, Display & Box Model, Color, Text, Other
* List @extend(s) first
* List "regular" styles next
* List @include(s) next
* Nest all pseduo-classes directly beneath base properties and values
* Media queries belong right after pseudo-classes
* List any class modifiers after all module children
* Modules are named _{module}.scss
* Be generous with comments & use same comment style shown in the [Snippets Section](#user-content-commentingsnippets)
* Variablize all colors, numbers, etc. in BEM syntax
* If a ```:hover``` pseudo class is styled, ```:focus``` should also be styled for accessibility. Focus styles should never be removed

###### SCSS Example
```css
    .module {
        @extend %clearfix;
        margin-top: u(rem(10));
        color: red;
        @include mixin;

        /* -- Min Width @ $tablet */
        @include min-breakpoint($tablet) {
            margin-top: u(rem(10)) u(rem(20));
        }

    .module__item {
        display: inline-block;
    }

    .module--alt {
        @extend .module;
        color: green;
    }
```
*Class names are named using adjectives and nouns.*

```css
    /* -- Block Noun */
    .person {}

    /* -- Element Noun__Noun */
    .person__hand{}

    /* -- Modifier Noun_Noun--Adjective */
    .person__hand--left{}
```

###### States
* States are styles that override all other styles.  Usually via javascript.
* States are generally applied to the same element as a layout rule, or to the same element as a base module.
* An example would be a navigation drop down, or a message that displays a success or error state.
* State class names should be written as a boolean.  For example, ```.is-collapsed``` or ```.is-error```.
* When state rules are added to specific modules, the module name should be included in the classname and   prefixed with ```is-```.  For example, an active tab state could be written as ```.is-nav-active```.
* States should be placed at the bottom of the module block thats being changed
* Make sure to document each state
* States can use `!importants` if absolutely necessary

#### Javascript
Use ID's on DOM elements and classes on repeated elements when adding javascript hooks. Prefix all JS hooks with `js-`.

#### Commenting/Snippets
Throw this snippet in your Emmet Sublime User Settings to enable some quick keyboard shortcuts that are used in this kit.
```json
{
    "css": {
      "snippets": {
        "mq-": "// -- Min Width @ ${1:width}\n@include bp-at-least(${1:width}) {\n|\n}",
        "com": "/**\n\n\t@${1:Block Name}\n--------------------------------------------------------\n\tmodules/_${1:Block Name}.scss\n--------------------------------------------------------\n\n\t${2:Block Desc}\n\n-------------------------------------------------------- */",
        "scom": "// ${1:Small Comment}",
        "ie": "// Old ie \n@include old-ie {\n\t${1:property:value}\n}",
        "rem": "u(rem(${1:value}))${2}",
        "em": "em(${1:value}px)${2};",
      }
    }
}
```

## Starter Static Files
These starter files (found within `_dev`) contain as little code as possible.  The structure consists of:

```
├── lib
| 	├──css
|    	├── style.dev.css (compiled css for static development files)
|       ├── style.dev.map (map file for browser development)
|
|	├── img
|   	├── (placeholder images are here for example pages)
|
|	├── js
|   	├── production
|			├── concatenated & minfied scripts, along with all other bower imported plugins
|		├── scripts.js (global scripts - should be used on every page)
|
|   ├── scss
|       ├── base
|           ├── variables, resets, mixins, global assets like fonts
|       ├── elements
|           ├── styles for base elements (p, ul, img, form, input, etc.)
|       ├── layout
|           ├── grids, widths, utilities, etc.
|       ├── modules
|           ├── styles for objects/modules you create (.site-header, .hero, .page, .bio, .site-footer, etc.)
|       ├── sass-docs
|           ├── index file for SCSS mixin, function, & var documentation
|
|       ├── screen.scss (the manifest file that pulls in all the partials and compiles into screen.css)
|       ├── screen-ie.scss (same as screen.scss but returns pixel values for IE legacy)
|
├── example-forms.html
|
├── example-grids.html
|
├── example-modules.html
|
├── example-index.html
|
├── index.html
|
├── README.md

```

## Usage
run `grunt` to watch files or `grunt dev` to open static index file and watch development files found in `_dev`.  See the projects [Gruntfile](https://github.com/coreybruyere/530Flow/blob/master/Gruntfile.js)


## Documentation
Extensive docs are in the works, but not yet released. However, Skyline makes it easy by adding detailed documentation in the comments of the scss partials themselves. Descriptions are right next to the actual code, making it simple to learn how it works.



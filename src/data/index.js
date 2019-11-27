const data = {
  slides: [
    {
      heading: 'CSS Educator',
      content: [
        'CSS basic introduction slides',
        'React app',
        'Major CSS concepts',
        'Dynamic style - manipulating CSS with JavaScript',
        'Style changes based on components current state',
        'Responsive layout concept'
      ],
      color: 'linear-gradient(to right bottom, #db1b00, #e04a00, #e46900, #e78400, #e89d00)',
      headingColor: '#d4d4d4',
      contentColor: '#011a27'
    },
    {
      heading: 'What is CSS ?',
      content: [
        'CSS - Cascading Style Sheets',
        'CSS is a domain-specific, declarative programming language',
        'Syntax - A CSS rule-set consists of a selector and a declaration block',
        'The CSS specifications are maintained by the World Wide Web Consortium (W3C)'
      ],
      color: 'linear-gradient(to right bottom, #063852, #043047, #03293c, #022131, #011a27)',
      headingColor: '#d4d4d4',
      contentColor: '#a6a6a6'
    },
    {
      heading: 'Syntax',
      content: [
        'Selectors: Tags, Classes, Ids, Positional Selectors, :Pseudo Selectors, ::Pseudo Elements, Combining Selectors',
        'Properties: height, background-color, position, display, font-family...',
        'Values: 100vh, #eee, sticky, flex, serif...',
        'CSS properties, associated with values, form declarations. Declaration blocks, assigned with selectors, form rule sets.'
      ],
      color: 'linear-gradient(to bottom, #73605b, #8a6d65, #a17a6f, #b88879, #d09683)',
      headingColor: '#d4d4d4',
      contentColor: '#363237'
    },
    {
      heading: 'Major concepts',
      content: [
        'Box model',
        'CSS Layout',
        'Media queries',
        'CSS units',
        'Text styling',
        'Boxes styling',
        'CSS colors and gradients',
        'CSS transitions and animations',
        'CSS transforms'
      ],
      color: 'linear-gradient(to left top, #1e1f26, #222431, #252a3d, #273049, #283655)',
      headingColor: '#d4d4d4',
      contentColor: '#d0e1f9'
    },
    {
      heading: 'Box model',
      content: [
        '*display property* - block, inline-block, inline, none .... FLEX',
        'According to the box model concept, every element on a page is a rectangular box and may have width, height, paddings, borders, and margins.',
        'box-sizing: content-box / padding-box( Deprecated ) / border-box',
        'Browser Developer Tools'
      ],
      color: 'linear-gradient(to bottom, #f70025, #fb4916,  #990017, #4d000b, #1a0004)',
      headingColor: '#f7efe2',
      contentColor: '#f7efe2'
    },
    {
      heading: 'CSS Layout',
      content: [
        'Changing normal flow',
        'Float: none / left / right + clear property ( Deprecated )',
        'Positioning - changing position of an element using offset values to move the box around from a particular reference point; position: static / relative / absolute / fixed / sticky; *z-index*',
        'Flex Layout - Responsive design - One-dimensional',
        'Grid layout - Two-dimensional'
      ],
      color: 'linear-gradient(to left bottom, #af4425, #9c3f23, #8a3921, #78341e, #662e1c)',
      headingColor: '#ebdcb2',
      contentColor: '#eee'
    },
    {
      heading: 'Media Queries',
      content: [
        'Mobile First',
        'Media queries give us a very powerful way to adjust our styles according to factors like the type of device used, the viewport size, the screen’s pixel density, or even the device orientation.',
        'Media queries are defined using the @media at-rule followed by a media type, 0 or more media features or both a media type and media feature(s).'
      ],
      color: 'linear-gradient(to bottom, #da9856, #d97332, #d45d26, #cf451c, #ca2317, #c01c17, #b51417, #ab0b16, #a10115)',
      headingColor: '#ebdcb2',
      contentColor: '#fff'
    },
    {
      heading: 'CSS Units',
      content: [
        'CSS has several different units for expressing a length. Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.',
        'There are two types of length units: absolute and relative.',
        'Absolute Lengths: The absolute length units are fixed and a length expressed in any of these will appear as exactly that size (px).',
        'Relative Lengths: Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums (em, rem, vw, vh, vmin, vmax, %).'
      ],
      color: 'linear-gradient(to right bottom, #324851, #305057, #2e585b, #2f605d, #34675c)',
      headingColor: '#7da3a1',
      contentColor: '#7da3a1'
    },
    {
      heading: 'Text Styling',
      content: [
        'Common font properties : font-family; font-size; font-weight; font-style...',
        'Common text properties : text-decoration, text-shadow, text-align, text-transform, line-height, word-space, word-wrap, word-break...',
        'Styling links : a:link { } Unvisited link; a:visited { } Visited links; a:hover { } The user mouses over a link; a:focus { } The user clicks on a link; a:active { } The user has clicked a link...',
        'Standard CSS properties can be aplied : color, background-color, padding, margin, border...'
      ],
      color: 'linear-gradient(to left bottom, #db9501, #a97703, #7c5a06, #523e07, #2e2300)',
      headingColor: '#d4d4d4',
      contentColor: '#d4d4d4'
    },
    {
      heading: 'Boxes Styling',
      content: [
        'background-image; background-position...',
        'filter: grayscale(%) / blur(px) / brightness(%)...',
        'box-shadow: 10px 10px 5px 5px #888 --- horizontal offset, vertical offset, blur radius, spread radius, color'
      ],
      color: 'linear-gradient(to right bottom, #00293c, #151e2f, #191520, #130b11, #000000)',
      headingColor: '#d4d4d4',
      contentColor: '#d4d4d4'
    },
    {
      heading: 'CSS colors and gradients',
      content: [
        'The color CSS data type represents a color in the sRGB color space. A color may also include an alpha-channel transparency value, indicating how the color should composite with its background.',
        'A can be defined in any of the following ways : Using a keyword (such as blue or transparent); Using the RGB cubic-coordinate system (via the #-hexadecimal or the rgb() and rgba() functional notations); Using the HSL(Hue-saturation-lightness) cylindrical-coordinate system (via the hsl() and hsla() functional notations)'
      ],
      color: 'linear-gradient(to right bottom, #af4425, #863029, #5b2125, #30151a, #000000)',
      headingColor: '#d4d4d4',
      contentColor: '#d4d4d4'
    },
    {
      heading: 'transitions and animations',
      content: [
        'A transition occurs when a CSS property changes from one value to another value over a period of time > transition: property duration transition-timing-function delay',
        'You can trigger CSS transitions directly with pseudo classes like :hover (activates when mouse goes over an element), :focus (activates when a user tabs onto an element, or when a user clicks into an input element), or :active (activates when user clicks on the element).',
        'Creating animations with @keyframes selector',
        'Animation settings: animation-name, animation-duration, animation-timing-function, animation-iteration-count, animation-direction, animation-delay'
      ],
      color: 'linear-gradient(to right bottom, #570de1, #0063ff, #0086f4, #009fd5, #0ab1b9)',
      headingColor: '#d4d4d4',
      contentColor: '#d4d4d4'
    },
    {
      heading: 'CSS transforms',
      content: [
        'The transform property comes in two different settings, two-dimensional and three-dimensional. Each of these come with their own individual properties and values.',
        '2D transforms : rotate(deg), scale(1.2), translate( px / % ), skew(deg),',
        'transform-origin: the default transform origin is the dead center of an element, both 50% horizontally and 50% vertically',
        '3D transforms : transform: perspective(200px) translateZ() / rotateZ() ...'
      ],
      color: 'linear-gradient(to left top, #a10115, #7b051d, #530d1d, #2d0e15, #000000)',
      headingColor: '#d4d4d4',
      contentColor: '#e6e6e6'
    },
    {
      heading: 'Conclusion',
      content: [
        'CSS Provides Consistent Design And Formatting Throughout Your Website',
        'CSS Can Adjust Your Page Layouts Depending On Where It`s Displayed',
        'CSS Increase Site Performance',
        'CSS Allows For Rapid Customization',
        'CSS Lets You Create Animation And Effects',
        'Work Faster With CSS Frameworks',
        'Explore CSS preprocessors like LESS, Stylus or SASS'
      ],
      color: 'linear-gradient(to right bottom, #301b28, #26161f, #1d1116, #12090d, #000000)',
      headingColor: '#d4d4d4',
      contentColor: '#e6e6e6'
    },
    {
      heading: 'The end of part one',
      content: [
      ],
      color: 'linear-gradient(to bottom, #4b4345, #393335, #282425, #181616, #000000)',
      headingColor: '#d4d4d4',
      contentColor: '#e6e6e6'
    }
  ]
}

export default data
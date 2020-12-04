const position = ['position', 'top', 'right', 'bottom', 'left', 'z-index']
const displayMode = ['box-sizing', 'display']
const flexBox = [
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap'
]
const gridLayout = [
  'grid',
  'grid-area',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row-gap',
  'grid-column-gap'
]

const align = ['align-content', 'align-items', 'align-self']
const justify = ['justify-content', 'justify-items', 'justify-self']
const order = ['order']
const boxModel = [
  'float',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'overflow',
  'overflow-x',
  'overflow-y',
  '-webkit-overflow-scrolling',
  '-ms-overflow-x',
  '-ms-overflow-y',
  '-ms-overflow-style',
  'clip',
  'clear'
]

const typography = [
  'font',
  'font-family',
  'font-size',
  'font-style',
  'font-weight',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  '-webkit-font-smoothing',
  '-moz-osx-font-smoothing',
  'font-smooth',
  'hyphens',
  'line-height',
  'color',
  'text-align',
  'text-align-last',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-decoration',
  'text-indent',
  'text-justify',
  'text-outline',
  '-ms-text-overflow',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-shadow',
  'text-transform',
  'text-wrap',
  '-webkit-text-size-adjust',
  '-ms-text-size-adjust',
  'letter-spacing',
  'word-break',
  'word-spacing',
  'word-wrap', // Legacy name for `overflow-wrap`
  'overflow-wrap',
  'tab-size',
  'white-space',
  'vertical-align',
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image'
]

const accessibilityAndInteraction = [
  'pointer-events',
  '-ms-touch-action',
  'touch-action',
  'cursor',
  'visibility',
  'zoom',
  'table-layout',
  'empty-cells',
  'caption-side',
  'border-spacing',
  'border-collapse',
  'content',
  'quotes',
  'counter-reset',
  'counter-increment',
  'resize',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left'
]

const backgroundAndBorder = [
  'background',
  'background-color',
  'background-image',
  "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
  'filter:progid:DXImageTransform.Microsoft.gradient',
  'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
  'filter',
  'background-repeat',
  'background-attachment',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-clip',
  'background-origin',
  'background-size',
  'background-blend-mode',
  'isolation',
  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-top',
  'border-top-color',
  'border-top-style',
  'border-top-width',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-style',
  'border-bottom-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset',
  'box-shadow',
  'mix-blend-mode',
  'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
  "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
  'opacity',
  '-ms-interpolation-mode'
]
const svg = [
  'alignment-baseline',
  'baseline-shift',
  'dominant-baseline',
  'text-anchor',
  'word-spacing',
  'writing-mode',

  'fill',
  'fill-opacity',
  'fill-rule',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',

  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'flood-color',
  'flood-opacity',
  'image-rendering',
  'lighting-color',
  'marker-start',
  'marker-mid',
  'marker-end',
  'mask',
  'shape-rendering',
  'stop-color',
  'stop-opacity'
]

const transitionAndAnimation = [
  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',
  'transform',
  'transform-origin',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction'
]

const declarationBlock = (properties, groupName) => ({
  properties,
  emptyLineBefore: 'threshold',
  noEmptyLineBetween: true,
  groupName
})

const propertiesOrder = [
  [
    {
      properties: ['all']
    },
    declarationBlock(position, 'position'),
    declarationBlock(displayMode, 'display mode'),
    declarationBlock(flexBox, 'flex box'),
    declarationBlock(gridLayout, 'grid layout'),
    declarationBlock(align, 'align'),
    declarationBlock(justify, 'justify'),
    declarationBlock(order, 'order'),
    declarationBlock(boxModel, 'box model'),
    declarationBlock(typography, 'typography'),
    declarationBlock(
      accessibilityAndInteraction,
      'accessibility & interaction'
    ),
    declarationBlock(backgroundAndBorder, 'background and border'),
    declarationBlock(svg, 'svg'),
    declarationBlock(transitionAndAnimation, 'transition & animation')
  ],
  {
    unspecified: 'ignore',
    emptyLineBeforeUnspecified: 'threshold',
    emptyLineMinimumPropertyThreshold: 5
  }
]

const typeOrder = [
  [
    'custom-properties',
    'dollar-variables',
    {
      type: 'at-rule',
      name: 'extend'
    },
    {
      type: 'at-rule',
      name: 'include',
      hasBlock: false
    },
    'declarations',
    {
      type: 'at-rule',
      name: 'include',
      hasBlock: true
    },
    'rules'
  ]
]

module.exports = {
  rules: {
    'order/order': typeOrder,
    'order/properties-order': propertiesOrder,
    'order/properties-alphabetical-order': null
  }
}

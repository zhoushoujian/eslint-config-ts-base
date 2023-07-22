/* eslint-disable max-len */
module.exports = {
  rules: {
    // 来源于airbnb的jsx规则
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }], // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ], //Prevent definitions of unused propTypes
    'react/style-prop-object': 'error', //Enforce style prop value being an object
    // 'react/jsx-tag-spacing': [
    //   'error',
    //   {
    //     closingSlash: 'never',
    //     beforeSelfClosing: 'always',
    //     afterOpening: 'never',
    //     beforeClosing: 'never'
    //   }
    // ], // Validate whitespace in and around the JSX opening and closing brackets
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }], //Forbid foreign propTypes
    'react/no-redundant-should-component-update': 'error', //Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-typos': 'error', //Prevents common typos
    'react/no-access-state-in-setstate': 'error', //Prevent using this.state within a this.setState
    'react/no-this-in-sfc': 'error', //Prevent `this` from being used in stateless functional components
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }], //aria-role
    'jsx-a11y/aria-props': 'error', //Elements cannot use an invalid ARIA attribute. This will fail if it finds an `aria-*` property
    'jsx-a11y/aria-proptypes': 'error', //ARIA state and property values must be valid.
    'jsx-a11y/aria-unsupported-elements': 'error', //Certain reserved DOM elements do not support ARIA roles, states and properties
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': []
      }
    ], //Enforce that all elements that require alternative text have meaningful information to relay back to the end user
    'jsx-a11y/img-redundant-alt': 'error', //Enforce img alt attribute does not contain the word image, picture, or photo
    'jsx-a11y/mouse-events-have-key-events': 'error', //Enforce onmouseover/onmouseout are accompanied by onfocus/onblur.
    'jsx-a11y/no-access-key': 'error', //Enforce no accessKey prop on element
    'jsx-a11y/role-has-required-aria-props': 'error', //true
    'jsx-a11y/heading-has-content': ['error', { components: [''] }], //Enforce that heading elements (`h1`, `h2`, etc.) have content and that the content is accessible to screen readers
    'jsx-a11y/html-has-lang': 'error', //<html> elements must have the lang prop.
    'jsx-a11y/lang': 'error', //The `lang` prop on the `<html>` element must have a valid value based on ISO country and language codes.
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink']
      }
    ], //Enforces that no distracting elements are use
    'jsx-a11y/scope': 'error', //The `scope` scope should be used only on `<th>` elements.
    'jsx-a11y/accessible-emoji': 'error', //Emoji have become a common way of communicating content to the end user
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error', //`aria-activedescendant` is used to manage focus within a [composite widget]
    'jsx-a11y/iframe-has-title': 'error', //`<iframe>` elements must have a unique title property to indicate its content to the user.
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }], //Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause usability issues for sighted and non-sighted users, alike.
    'jsx-a11y/no-redundant-roles': 'error', //Some HTML elements have native semantics that are implemented by the browser
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation']
      }
    ], //Interactive HTML elements indicate _controls_ in the user interface
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell']
      }
    ], //Non-interactive HTML elements indicate _content_ and _containers_ in the user interface
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel']
      }
    ] //Tab key navigation should be limited to elements on the page that can be interacted with
  }
};

module.exports = {
  plugins: ['jsx-a11y', 'react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-a11y/control-has-associated-label': 'off', //Enforce that a control (an interactive element) has a text label
    'jsx-a11y/click-events-have-key-events': 'off', //Enforce `onClick` is accompanied by at least one of the following: `onKeyUp`, `onKeyDown`, `onKeyPress`
    'jsx-a11y/no-static-element-interactions': 'off', //Static HTML elements do not have semantic meaning.
    'jsx-a11y/interactive-supports-focus': 'off', //Elements with an interactive role and interaction handlers (mouse or key press) must be focusable
    'jsx-a11y/anchor-is-valid': 'off', //The HTML `<a>` element, with a valid `href` attribute, is formally defined as representing a **hyperlink**
    'jsx-a11y/label-has-associated-control': 'off' //Enforce that a label tag has a text label and an associated control.
  }
};

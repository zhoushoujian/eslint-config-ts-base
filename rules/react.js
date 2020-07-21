module.exports = {
  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze' // https://tc39.github.io/ecma262/#sec-object.freeze
    ]
  },
  rules: {
    //React相关
    'react/display-name': [0, { ignoreTranspilerName: true }], //防止在React组件定义里丢失displayName
    'react/jsx-key': 2, //  Detect missing `key` prop
    'react/jsx-no-comment-textnodes': 2, //Prevent comments from being inserted as text nodes
    'react/jsx-no-duplicate-props': 2, //Prevent duplicate properties in JSX
    'react/jsx-no-target-blank': 0, //Prevent usage of unsafe `target='_blank'`
    'react/jsx-no-undef': 2, // Disallow undeclared variables in JSX
    'react/jsx-uses-react': 2, //Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2, //Prevent variables used in JSX to be incorrectly marked as unused
    'react/no-children-prop': 2, //Prevent passing of children as props
    'react/no-danger-with-children': 2, //Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-deprecated': 2, // Prevent usage of deprecated methods
    'react/no-direct-mutation-state': 2, //  Prevent direct mutation of this.state
    'react/no-find-dom-node': 2, //Prevent usage of findDOMNode
    'react/no-is-mounted': 2, //Prevent usage of isMounted
    'react/no-render-return-value': 2, //Prevent usage of the return value of ReactDOM.render
    'react/no-string-refs': 2, //Prevent using string references
    'react/no-unescaped-entities': 2, // Prevent invalid characters from appearing in markup
    'react/no-unknown-property': 2, // Prevent usage of unknown DOM property
    // 'react/prop-types': 2, // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 2, //Prevent missing React when using JSX
    'react/require-render-return': 2, //Enforce ES5 or ES6 class for returning value in render function
    'react/button-has-type': [
      'off',
      {
        button: false,
        submit: true,
        reset: false
      }
    ], //Prevent usage of `button` elements without an explicit `type` attribute. If you use only `"submit"` buttons, you can disable this rule
    'react/no-danger': 0, //Prevent usage of dangerous JSX properties

    //JSX指定的规则
    'react/jsx-boolean-value': [2, 'always'], //Enforce boolean attributes notation in JSX
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }], //Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Restrict file extensions that may contain JSX
    'react/jsx-no-useless-fragment': 2, //  Disallow unnecessary fragments
    'react/jsx-pascal-case': 2, //Enforce PascalCase for user-defined JSX components
    'react/jsx-props-no-multi-spaces': 2, //Disallow multiple spaces between inline JSX props
    'react/jsx-one-expression-per-line': 'off', //One JSX Element Per Line

    //React others
    'react/destructuring-assignment': 2, // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/jsx-equals-spacing': 2, //Enforce or disallow spaces around equal signs in JSX attributes.
    'react/jsx-max-props-per-line': [1, { maximum: 5 }], // Limit maximum of props on a single line in JSX
    'react/no-did-update-set-state': 2, //Prevent usage of setState in componentDidUpdate
    'react/no-unused-state': 2, //Prevent definitions of unused state
    'react/no-will-update-set-state': 2, //Prevent usage of setState in componentWillUpdate
    'react/prefer-es6-class': 2, //react/prefer-es6-class
    'react/void-dom-elements-no-children': 2, //Prevent void DOM elements
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ]
  }
};

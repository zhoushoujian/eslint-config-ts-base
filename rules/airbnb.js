module.exports = {
  rules: {
    // 来源于airbnb的规则
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ], //强制类方法使用 this
    // 'dot-location': ['error', 'property'], //强制在点号之前或之后换行
    'guard-for-in': 'error', ////需要约束 for-in
    'max-classes-per-file': 0, //强制每个文件中包含的的类的最大数量
    'no-alert': 'warn', //禁用 Alert
    'no-new-func': 'error', //禁止使用 new 以避免产生副作用
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-lone-blocks': 'error', //禁用不必要的嵌套块
    'no-loop-func': 'error', //禁止循环中存在函数
    'no-return-assign': ['error', 'always'], //禁止在返回语句中赋值
    'no-void': 'error', //禁止使用void操作符
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }], // 要求使用 Error 对象作为 Promise 拒绝的原因
    'no-await-in-loop': 'error', //禁止在循环中 出现 await
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ], //禁止在可能与比较操作符相混淆的地方使用箭头函数
    // 'prefer-template': 'error', //建议使用模板字面量而非字符串连接
    'template-curly-spacing': 'error', //强制模板字符串中空格的使用
    // 'yield-star-spacing': ['error', 'after'], //强制在 yield* 表达式中 * 周围使用空格
    'import/named': 'error', //Verifies that all named imports are part of the set of named exports in the referenced module.
    'import/export': 'error', //Reports funny business with exports, like repeated exports of names or defaults.
    'import/no-named-as-default': 'error', //Reports use of an exported name as the locally imported name of a default export.
    'import/no-named-as-default-member': 'error', //Reports use of an exported name as a property on the default export.
    'import/no-mutable-exports': 'error', //Forbids the use of mutable exports with `var` or `let`.
    'import/no-amd': 'error', //Intended for temporary use when migrating to pure ES6 modules.
    'import/first': 'error', //This rule reports any imports that come after non-import statements.
    'import/no-duplicates': 'error', //Reports if a resolved path is imported more than once.
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }], //Enforce a convention in module import order
    'import/newline-after-import': 'error', //Enforces having one or more empty lines after the last top-level import statement or require call.
    'import/no-absolute-path': 'error', //Forbid import of modules using absolute paths
    'import/no-dynamic-require': 'error', //Forbid `require()` calls with expressions
    'import/no-webpack-loader-syntax': 'error', //Forbid Webpack loader syntax in imports.
    'import/no-named-default': 'error', //Reports use of a default export as a locally named import.
    'import/no-self-import': 'error', //Forbid a module from importing itself
    'import/no-useless-path-segments': ['error', { commonjs: true }], //use this rule to prevent unnecessary path segments in import and require statements.
    'global-require': 'error', //use this rule to prevent unnecessary path segments in import and require statements.
    'eol-last': ['error', 'always'], //要求或禁止文件末尾保留一行空行
    // 'function-paren-newline': ['error', 'consistent'], //强制在函数括号内使用一致的换行
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ], //?
    'no-nested-ternary': 'error', //禁止使用嵌套的三元表达式
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ], //禁止使用特定的语法
    'no-spaced-func': 'error', //?
    'no-tabs': 'error', // 禁用 tab
    'switch-colon-spacing': ['error', { after: true, before: false }], //强制在 switch 的冒号左右有空格
    'template-tag-spacing': ['error', 'never'], //要求或禁止在模板标记和它们的字面量之间有空格
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }], // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ], //Prevent definitions of unused propTypes
    'react/style-prop-object': 'error', //Enforce style prop value being an object
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ], // Validate whitespace in and around the JSX opening and closing brackets
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
    ], //Tab key navigation should be limited to elements on the page that can be interacted with
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ] //anchor-is-valid
  }
};

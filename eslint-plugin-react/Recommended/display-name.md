# 防止在React组件定义里丢失displayName (react/display-name)

DisplayName 允许你命令你的组件，这个名字在react debug消息中被使用

## Rule Details

下面的范例会发出警告：

```jsx
var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

下面的范例```不```会发出警告：

```jsx
var Hello = createReactClass({
  displayName: 'Hello',
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

## Rule Options

```js
...
"react/display-name": [<enabled>, { "ignoreTranspilerName": <boolean> }]
...
```

### `ignoreTranspilerName` (default: `false`)

当为`true`的时候，规则将忽略被编译器设置的名字，并且在这种情况下需要一个`displayName`属性

下面的范例被认为是正确的且```不```会发出警告：

```jsx
var Hello = createReactClass({
  displayName: 'Hello',

  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
module.exports = Hello;
```

```jsx
export default class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
Hello.displayName = 'Hello';
```

```jsx
export default function Hello({ name }) {
  return <div>Hello {name}</div>;
}
Hello.displayName = 'Hello';
```

下面的范例会引发警告

```jsx
var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
module.exports = Hello;
```

```jsx
export default class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

```jsx
module.exports = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

```jsx
export default class extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

```jsx
function HelloComponent() {
  return createReactClass({
    render: function() {
      return <div>Hello {this.props.name}</div>;
    }
  });
}
module.exports = HelloComponent();
```

## About component detection

为了让这条规则工作，我们需要检测react组件，并且这可能是非常困难的因为组件有许多种声明方式

For now we should detect components created with:

* `createReactClass()`
* an ES6 class that inherit from `React.Component` or `Component`
* a stateless function that return JSX or the result of a `React.createElement` call.

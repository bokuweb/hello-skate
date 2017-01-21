import React from 'react';
import { render } from 'react-dom';
import './hello';

class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

render(<Foo><x-counter /></Foo>, document.querySelector('#main'));


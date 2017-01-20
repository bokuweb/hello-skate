/** @jsx h */
import '../../lib/native-sim.js';
import { Component, h } from 'skatejs';

class Hello extends Component {
  renderCallback () {
    return <span>Hello, <slot />!</span>;
  }
}

customElements.define('x-hello', Hello);
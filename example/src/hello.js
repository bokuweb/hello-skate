/** @jsx h */

import 'skatejs-web-components';
import { Component, h, prop } from 'skatejs';

const _interval = Symbol();

class Counter extends Component {
  static get props() {
    return { count: prop.number() };
  }
  connectedCallback() {
    super.connectedCallback();
    this[_interval] = setInterval(() => ++this.count, 1000);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this[_interval]);
  }

  get style() {
    return `
      :host { color: red; }
    `;
  }

  renderCallback() {
    return [
      <style>{this.style}</style>,
      <span>Count: {this.count}</span>,
    ]
  }
}

customElements.define('x-counter', Counter);
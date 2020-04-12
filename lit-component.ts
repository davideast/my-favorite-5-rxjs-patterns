import { html, render } from 'lit-html';

interface ComponentConfig<T> {
  template: (state: T) => string;
  selector: string;
}

export class LitComponent<T> {
  state: T;
  setState(state: T) { }
}

export function Component<T>(config: ComponentConfig<T>) {
  const { template, selector } = config;
  const rootElement = document.querySelector(selector);
  return function(target: Function) {
    target.prototype.setState = function(state: T) {
      render(html`${template(state)}`, rootElement);
    } 
  };
}

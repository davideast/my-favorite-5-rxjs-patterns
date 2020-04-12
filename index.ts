import './tailwind.min.css';
import { MapMutateApp } from './map-to-mutate';

import { Component, LitComponent } from './lit-component';


@Component<string>({
  template: name => `<h1>Hi ${name}</h1>`,
  selector: '#map-mutate'
})
class App extends LitComponent<string> {

  constructor() {
    super();
    console.log(this.setState('David'));
  }

}

new App();

// new MapMutateApp(
//   document.querySelector('#map-mutate')
// );

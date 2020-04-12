import { html, render } from 'lit-html';

import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { User } from './types';

export class MapMutateApp {

  user$: Observable<User>;

  constructor(private root: HTMLElement) {
    this.user$ = of({ 
      userId: 'HJKEg8h3812sjdiAEhopw',
      username: 'davideast',
    });
  }

  template() {
    return html`
    <div>
      <h1>Hai</h1>
    </div>
    `;
  }

  render() {
    render(this.template(), this.root);
  }

  onNewTask(taskName: string) {

  }

}
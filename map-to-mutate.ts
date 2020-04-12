import { html, render } from 'lit-html';

import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { User } from './types';

import { Component, LitComponent } from './lit-component';

@Component<any>({
  template: state => `<h2>${state.name}</h2>`,
  selector: '#map-mutate'
})
export class MapMutate extends LitComponent<any> {

  user$: Observable<User>;

  constructor() {
    super();
    this.state = {
      name: 'David!'
    };
    this.user$ = of({ 
      userId: 'HJKEg8h3812sjdiAEhopw',
      username: 'davideast',
    });
  }

  onNewTask(taskName: string) {

  }

}
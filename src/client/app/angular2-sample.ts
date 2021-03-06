import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Todo} from './todo/todo';

@Component({
  selector: 'angular2-sample-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/angular2-sample.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/todo/...', name: 'Todo', component: Todo},
])
export class Angular2SampleApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

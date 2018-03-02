/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.component.less')
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
  ) {}

  public ngOnInit() {
    console.log('Initial App State');
  }

}

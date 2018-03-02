/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './load-data.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('./app.component.less')
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'Table of colors (HEX)';
  private colorsArr = [];
  constructor(
    private loadDataService: LoadDataService) {}
    ngOnInit() {
      this.getColors();
    }

  private getColors(): void {
    this.loadDataService.getJSON().subscribe((data) => {
      this.colorsArr = data.colorsArray;
      console.log( this.colorsArr );
    });
  }
}

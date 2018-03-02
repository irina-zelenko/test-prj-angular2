import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable()
export class LoadDataService {

  constructor(public http: HttpClient) {}
  public getJSON() {
    return this.http.get( 'app/data.json' )
      .map( ( res: any ) => res );
  }

}
